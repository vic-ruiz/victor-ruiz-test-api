import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }

  });