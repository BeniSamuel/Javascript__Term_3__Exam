import React from "react";

const ContactTable = ({ contacts, setEditingContact, deleteContact }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Position</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="py-2 px-4 border-b">{contact.title}</td>
              <td className="py-2 px-4 border-b">{contact.firstName}</td>
              <td className="py-2 px-4 border-b">{contact.lastName}</td>
              <td className="py-2 px-4 border-b">{contact.position}</td>
              <td className="py-2 px-4 border-b">{contact.company}</td>
              <td className="py-2 px-4 border-b">{contact.email}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => setEditingContact(contact)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteContact(contact._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
