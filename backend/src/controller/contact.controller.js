import { Contact } from "../models/contact.model.js";

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message: message || ''
    });

    return res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: newContact
    });

  } catch (error) {
    console.error('Error creating contact:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages[0] || 'Validation error',
        errors: messages
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Contact deleted successfully',
      data: deletedContact
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export {
  createContact,
  getAllContacts,
  deleteContact
};