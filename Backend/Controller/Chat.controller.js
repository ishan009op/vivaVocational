import Groq from "groq-sdk";

export const Chat=async(req,res)=>{
    const { message } = req.body;
    const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
const response = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "system",
      content: `
You are an AI assistant for XYZ Coaching Institute.

Only answer questions related to courses, fees, admissions, timings.

If unrelated, say: "I can only help with institute queries."

JEE fee: ₹50,000
NEET fee: ₹45,000
Timing: 4 PM – 8 PM
location:samrala
`
    },
    {
      role: "user",
      content: message
    }
  ]
});

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
}