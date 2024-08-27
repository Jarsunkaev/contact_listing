"use client";

import React, { useState } from 'react';

const AddContactModal = ({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (contact: { name: string; phone: string; email: string }) => void }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ name, phone, email });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1C1C1C] text-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-glysa mb-4">Add contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <button type="button" className="w-full py-2 px-4 bg-[#282828] text-white rounded-md hover:bg-[#353535] transition-colors">
            + Add picture
          </button>
          <label htmlFor="text" className="block text-sm font-medium text-gray-300"> Name</label>
          <input
            type="text"
            placeholder="Jamie Wright"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#282828] text-white p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="+36 20 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-[#282828] text-white p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="jamie.wright@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#282828] text-white p-2 rounded-md"
          />
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-transparent text-white hover:bg-[#282828] rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;