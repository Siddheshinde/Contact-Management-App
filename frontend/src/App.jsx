import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL =
  "https://contact-management-app-d41a.onrender.com/api/v1/contacts";


function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const fetchContacts = async () => {
    const res = await axios.get(API_URL);
    setContacts(res.data.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Name, Email, Phone are required");
      return;
    }

    await axios.post(API_URL, form);
    setForm({ name: "", email: "", phone: "", message: "" });
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchContacts();
  };

  return (
    <>
      {/* TITLE AT TOP */}
      <header className="header">
        <h1>Contact Management</h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="app">
        <form onSubmit={handleSubmit} className="form">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <hr />

        <h2>Contacts</h2>

        {contacts.map((c) => (
          <div className="contact" key={c._id}>
            <p>
              <b>{c.name}</b> — {c.email} — {c.phone}
              {c.message && ` — ${c.message}`}
            </p>
            <button onClick={() => deleteContact(c._id)}>Delete</button>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
