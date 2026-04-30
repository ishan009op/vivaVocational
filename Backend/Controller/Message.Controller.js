export const SendMessages=async(req,res)=>{
    const { name, email, message } = req.body;

  try {
    const newMessage = await Message.create({
      name,
      email,
      message
    });

    res.json({ success: true, data: newMessage });

  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
}
export const getMessage=async(req,res)=>{
    const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
}