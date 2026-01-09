
import { Router } from "express";
import {
  createContact,
  getAllContacts,
  deleteContact // bonus
} from "../controller/contact.controller.js";

const router = Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact); 

export default router;