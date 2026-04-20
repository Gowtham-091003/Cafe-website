import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent, ChangeEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "2",
    requests: "",
    _honey: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Simple honeypot check
    if (formData._honey) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/78412b8e29e0f455d22887d35dbbf059", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _captcha: "false",
          _subject: `New Reservation Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", date: "", guests: "2", requests: "", _honey: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="pt-32 pb-24 bg-coffee-dark min-h-screen text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-coffee-latte font-semibold uppercase tracking-[0.3em] text-xs block mb-6">
            Reservations & Enquiries
          </span>
          <h1 className="serif text-6xl md:text-8xl italic mb-10">
            Secure Your <br /> <span className="not-italic font-bold">Moment.</span>
          </h1>
          
          <div className="space-y-12">
            <div>
              <h3 className="serif text-2xl text-coffee-latte italic mb-4">Location</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=30+Katchery+Street,+Parangipettai,+Cuddalore+District" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-paper/60 font-light leading-relaxed hover:text-coffee-latte transition-colors block"
              >
                30 Katchery Street, Parangipettai,<br />
                Cuddalore District
              </a>
            </div>

            <div>
              <h3 className="serif text-2xl text-coffee-latte italic mb-4">Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-paper/60 font-light">
                <div>
                  <span className="block text-paper">Mon — Fri</span>
                  7:00am — 8:00pm
                </div>
                <div>
                  <span className="block text-paper">Sat — Sun</span>
                  8:00am — 10:00pm
                </div>
              </div>
            </div>

            <div>
              <h3 className="serif text-2xl text-coffee-latte italic mb-4">Contact</h3>
              <p className="text-paper/60 font-light leading-relaxed">
                ganeshgowtham983@gmail.com<br />
                +91 82489 04345
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Booking Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-[48px] p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-latte/5 blur-[100px] pointer-events-none"></div>
          
          <h2 className="serif text-3xl italic mb-10 text-paper">Book a Table</h2>
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-coffee-latte/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-coffee-latte w-10 h-10" />
                </div>
                <h3 className="serif text-3xl italic mb-4">Reservation Sent</h3>
                <p className="text-paper/60 max-w-sm mb-10">We've received your request and will confirm your table shortly via email.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 rounded-full border border-coffee-latte/30 text-coffee-latte text-xs font-bold uppercase tracking-widest hover:bg-coffee-latte hover:text-coffee-dark transition-all"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                {/* FormSubmit.co Honeypot */}
                <input type="text" name="_honey" value={formData._honey} onChange={handleChange} className="hidden" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-coffee-latte/70">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-coffee-latte/20 py-3 text-paper placeholder:text-paper/20 outline-none focus:border-coffee-latte transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-coffee-latte/70">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-coffee-latte/20 py-3 text-paper placeholder:text-paper/20 outline-none focus:border-coffee-latte transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-coffee-latte/70">Preferred Date</label>
                    <input 
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date" 
                      className="w-full bg-transparent border-b border-coffee-latte/20 py-3 text-paper outline-none focus:border-coffee-latte transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-coffee-latte/70">Guests</label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-coffee-latte/20 py-3 text-paper outline-none focus:border-coffee-latte transition-colors font-light"
                    >
                      <option value="1" className="bg-coffee-dark text-paper">1 Person</option>
                      <option value="2" className="bg-coffee-dark text-paper">2 People</option>
                      <option value="4" className="bg-coffee-dark text-paper">4 People</option>
                      <option value="6" className="bg-coffee-dark text-paper">6+ People</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-coffee-latte/70">Special Requests</label>
                  <textarea 
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dietary requirements or special occasions..."
                    className="w-full bg-transparent border-b border-coffee-latte/20 py-3 text-paper placeholder:text-paper/20 outline-none focus:border-coffee-latte transition-colors font-light resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-400 text-[10px] uppercase tracking-widest font-bold"
                  >
                    <AlertCircle size={14} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <button 
                  disabled={status === "submitting"}
                  className="w-full bg-coffee-latte text-coffee-dark py-5 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:brightness-110 transition-all duration-300 shadow-xl shadow-coffee-latte/10 mt-6 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Processing...
                    </>
                  ) : (
                    "Confirm Reservation"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
