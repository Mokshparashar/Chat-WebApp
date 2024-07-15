import Conversation from '../Models/conversation.model.js';
import Message from '../Models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    //console.log("Sender ID:", senderId);
    //console.log("Receiver ID:", receiverId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //console.log("Conversation:", conversation);

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();

    //console.log("New Message:", newMessage);

    // Make sure to push to 'messages' array
    conversation.messages.push(newMessage._id);

    await conversation.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessages = async (req , res) =>{
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //not refrence but a actual message

    if(!conversation) return res.status(200).json([]);

    const message = conversation.messages;

    res.status(200).json(conversation.messages)
    
  } catch (error) {
    console.error("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
