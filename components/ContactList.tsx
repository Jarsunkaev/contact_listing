import React from 'react';
import Image from 'next/image';

const dummyContacts = [
  { id: 1, name: 'Timothy Lewis', phone: '(254) 555-0123', image: null },
  { id: 2, name: 'Sarah Wright', phone: '(555) 123-4567', image: null },
  { id: 3, name: 'Lucy Jones', phone: '(555) 987-6543', image: null },
  { id: 4, name: 'John Perez', phone: '(555) 246-8102', image: null },
  { id: 5, name: 'Anthony Rodriguez', phone: '(555) 369-2580', image: null },
];

const ContactList = () => {
  return (
    <div className="w-full md:w-[720px] mx-auto justify-items-start">
      <div className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-3">
          <ul>
            {dummyContacts.map((contact) => (
              <li key={contact.id} className="py-4 px-4 flex justify-items-start space-x-4">
                <Image 
                  src={contact.image || "/profile.png"}
                  alt={`${contact.name}'s profile`} 
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <h2 className="font-semibold text-gray-200">{contact.name}</h2>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;