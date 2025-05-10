import { GoogleGenerativeAI } from "@google/generative-ai";

// Your Gemini API Key
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);

// Function to search for movies

