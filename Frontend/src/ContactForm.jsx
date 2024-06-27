import React, { useState, useEffect } from "react";

const ContactForm = ({ onSubmit, editingContact, setEditingContact }) => {
  const [contact, setContact] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
    termsAccepted: false,
  });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    } else {
      resetForm();
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContact({
      ...contact,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  const resetForm = () => {
    setContact({
      title: "",
      firstName: "",
      lastName: "",
      position: "",
      company: "",
      businessArena: "",
      employees: "",
      street: "",
      additionalInfo: "",
      zipCode: "",
      place: "",
      country: "",
      code: "",
      phoneNumber: "",
      email: "",
      termsAccepted: false,
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={contact.title}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Position</label>
        <input
          type="text"
          name="position"
          value={contact.position}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Business Arena</label>
          <input
            type="text"
            name="businessArena"
            value={contact.businessArena}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Employees</label>
          <input
            type="text"
            name="employees"
            value={contact.employees}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Street + Nr</label>
        <input
          type="text"
          name="street"
          value={contact.street}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">Additional Information</label>
        <input
          type="text"
          name="additionalInfo"
          value={contact.additionalInfo}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={contact.zipCode}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Place</label>
          <input
            type="text"
            name="place"
            value={contact.place}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={contact.country}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Code +</label>
          <input
            type="text"
            name="code"
            value={contact.code}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Your Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          name="termsAccepted"
          checked={contact.termsAccepted}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="terms" className="text-gray-700">
          I do accept the{" "}
          <a href="#" className="text-blue-500">
            Terms and Conditions
          </a>{" "}
          of your site.
        </label>
      </div>
      <div>
        <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md">
          {editingContact ? "Update Contact" : "Register Badge"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
