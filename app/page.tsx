"use client";

import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import Header from "../components/Header";
import AddContactModal from "../components/AddContactModal";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const handleAddContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
    setIsAddModalOpen(false);

  };
  return (
    <div className="min-h-screen bg-[#141414] relative">
      {/* Background element with borders */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="h-full max-w-[720px] mx-auto relative">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-700"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gray-700"></div>
        </div>
        <div className="absolute top-20 left-0 right-0 h-px bg-gray-700"></div>
      </div>

      {/* Main content */}
      <main className="pt-20 flex flex-col items-center">
        <div className="w-full max-w-[720px]">
          <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
        </div>
        {/* Full-width border */}
        <div className="w-full h-px bg-gray-700"></div>
        <div className="w-full max-w-[720px]">
          <ContactList contacts={contacts} />
        </div>
      </main>

      <AddContactModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddContact}
      />
    </div>
  );
}