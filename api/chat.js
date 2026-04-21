export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('GEMINI_API_KEY environment variable is not defined');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  try {
    // Official Gemini REST API endpoint (v1alpha for gemini-3-flash-preview or v1beta for standard)
    const url = `https://generativelanguage.googleapis.com/v1alpha/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: message }],
          },
        ],
        systemInstruction: {
          parts: [
            {
              text: `You are Huddy, the AI assistant for Gowtham Cafe.

PURPOSE:
- Answer questions about Gowtham Cafe
- Help users explore menu items
- Provide details about coffee, food, ambiance, and bookings
- Guide users to book a table

STRICT RULES:
- You MUST ONLY answer questions related to Gowtham Cafe.
- If a question is unrelated (e.g., politics, general knowledge, coding, etc.), you MUST refuse.
- Your response to unrelated questions MUST BE: "I'm here to assist with Gowtham Cafe only 😊 Please ask about our menu, coffee, or reservations."

ABOUT GOWTHAM CAFE:
- Artisanal roastery and kitchen.
- Ethically sourced coffee beans from Ethiopia and Colombia.
- Philosophy: Coffee is an experience connecting origin, roasting, and craft.

MENU HIGHLIGHTS:
- Signature Brews: Single Origin Batch ($4.5) - Rotating small-batch roasts.
- Small Plates: Avocado & Dukkah ($12.0) - Sourdough with lemon zest and hazelnut dukkah.

TODAY'S SPECIALS:
- Ethiopian Yirgacheffe - $6.50
- Smashed Avocado Toast - $14.00
- Truffle Egg Benedict - $18.50
- Special: Maple Pecan Cold Brew - Seasonal drink with house-made nut milk and maple syrup.

BRAND VOICE & STYLE:
- Elegant, Warm, Premium, Minimal but descriptive.
- Keep answers short and refined.
- Use a welcoming tone.
- Suggest items when relevant.
- Encourage booking subtly (e.g., "Would you like to reserve a table and try it fresh?").

BOOKINGS:
- If a user shows interest, guide them to book a table (e.g., "I can help you book a table—what time works for you?").

CONTEXT HANDLING:
- If a question is vague, ask a follow-up related to the cafe only.`
            }
          ]
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({ error: 'Failed to fetch from Gemini API' });
    }

    const data = await response.json();
    
    // Extract text from Gemini response structure
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that.";

    return res.status(200).json({ text: botResponse });
  } catch (error) {
    console.error('Serverless Function Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
