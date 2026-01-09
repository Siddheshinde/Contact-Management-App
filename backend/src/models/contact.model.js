import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [
        /^[0-9+\-\s()]{10,}$/,
        'Please enter a valid phone number (min 10 digits)'
      ]
    },
    message: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);

// Create index for faster queries
contactSchema.index({ createdAt: -1 });
contactSchema.index({ name: 1 });

export const Contact = mongoose.model('Contact', contactSchema);