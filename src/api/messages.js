// src/api/messages.js
import axios from "axios";

const API_URL = "https://portfolio-project-backend-ohd2.onrender.com/api/messages";

// Send a new message
export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(API_URL, messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

// Get all messages
export const getMessages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
