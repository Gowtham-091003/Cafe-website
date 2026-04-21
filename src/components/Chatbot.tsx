import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Loader2, User, Bot, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hey! I'm Huddy, AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch from proxy");
      }

      const data = await response.json();
      const botResponse = data.text || "I'm sorry, I couldn't process that. Could you try again?";
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: "bot", content: "Oops, something went wrong. I'm currently having trouble connecting to my brain! ☕️" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-coffee-dark border border-coffee-latte/20 rounded-[32px] shadow-2xl overflow-hidden flex flex-col glass"
          >
            {/* Header */}
            <div className="p-4 border-b border-coffee-latte/10 flex items-center justify-between bg-coffee-latte/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coffee-latte flex items-center justify-center shadow-lg shadow-coffee-latte/10">
                  <Sparkles size={20} className="text-coffee-dark" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-paper tracking-wider uppercase">Huddy AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-paper/40 uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-paper/40 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === "user" ? "bg-coffee-latte/20 text-coffee-latte" : "bg-coffee-latte text-coffee-dark"
                    }`}>
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-coffee-latte text-coffee-dark rounded-tr-none" 
                        : "bg-white/5 text-paper/80 rounded-tl-none border border-white/5"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-coffee-latte text-coffee-dark flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 rounded-2xl rounded-tl-none bg-white/5 border border-white/5 flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-paper/40" />
                      <span className="text-paper/40 italic text-xs tracking-wider">Huddy is brewing an answer...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 border-t border-coffee-latte/10 bg-coffee-latte/5 flex items-center gap-3"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-paper placeholder:text-paper/20 text-sm py-2 font-light"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-coffee-latte text-coffee-dark flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-coffee-latte text-coffee-dark shadow-2xl flex items-center justify-center relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-paper rounded-full border-2 border-coffee-dark flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-coffee-latte rounded-full"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
}
