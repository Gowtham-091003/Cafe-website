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
              text: "You are Huddy, an AI assistant for Gowtham Cafe. You are friendly, knowledgeable about coffee, and helpful. You represent a premium, artisanal cafe experience. Keep responses concise and engaging."
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
