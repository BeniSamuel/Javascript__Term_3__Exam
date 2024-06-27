import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await axios.post("/api/contacts", contact);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const response = await axios.put(`/api/contacts/${contact._id}`, contact);
      setContacts(contacts.map((c) => (c._id === contact._id ? response.data : c)));
      setEditingContact(null);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="md:flex">
          <div className="w-full p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <ContactForm
              onSubmit={editingContact ? updateContact : addContact}
              editingContact={editingContact}
              setEditingContact={setEditingContact}
            />
            <ContactTable
              contacts={contacts}
              setEditingContact={setEditingContact}
              deleteContact={deleteContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
