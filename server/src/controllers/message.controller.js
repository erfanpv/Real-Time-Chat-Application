import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../config/cloudinary.js";
import { getReceiverSocketId, io } from "../config/socket.js";
import asyncHandler from "../middleware/async.handler.js";

export const getUsersForSidebar = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user._id;
  const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
    "-password"
  );

  res.status(200).json(users);
});

export const getMessages = asyncHandler(async (req, res) => {
  const { id: chatPartnerId } = req.params;
  const myId = req.user._id;

  const messages = await Message.find({
    $or: [
      { senderId: myId, receiverId: chatPartnerId },
      { senderId: chatPartnerId, receiverId: myId },
    ],
  });

  res.status(200).json(messages);
});

export const sendMessage = asyncHandler(async (req, res) => {
  const { text, image } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  let imageUrl;
  if (image) {
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageUrl = uploadResponse.secure_url;
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    text,
    image: imageUrl,
  });

  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  res.status(201).json(newMessage);
});
