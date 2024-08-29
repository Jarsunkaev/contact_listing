import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EditContactModal from './EditContactModal';
import { ContactModel } from '../models/Contacts';

const BellIcon = () => (
  <div className="flex items-center justify-center w-8 h-8">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4.2499 18.8748V17.3748H6.2499V10.1248C6.2499 9.8748 6.26657 9.64147 6.2999 9.4248C6.33324 9.20814 6.3749 8.99147 6.4249 8.7748L2.0249 4.3748L3.0999 3.3248L20.9249 21.1498L19.8749 22.2248L16.4999 18.8748H4.2499ZM17.7499 15.1498L16.2499 13.6498V10.1248C16.2499 8.94147 15.8332 7.93714 14.9999 7.1118C14.1666 6.28714 13.1666 5.8748 11.9999 5.8748C11.5332 5.8748 11.0709 5.9538 10.6129 6.1118C10.1542 6.27047 9.7499 6.4998 9.3999 6.7998L8.3249 5.7248C8.6749 5.4248 9.05824 5.17047 9.4749 4.9618C9.89157 4.7538 10.3166 4.5998 10.7499 4.4998V3.7998C10.7499 3.4498 10.8709 3.1538 11.1129 2.9118C11.3542 2.67047 11.6499 2.5498 11.9999 2.5498C12.3499 2.5498 12.6456 2.67047 12.8869 2.9118C13.1289 3.1538 13.2499 3.4498 13.2499 3.7998V4.4998C14.4999 4.78314 15.5626 5.43747 16.4379 6.4628C17.3126 7.48747 17.7499 8.70814 17.7499 10.1248V15.1498ZM11.9999 21.7998C11.4999 21.7998 11.0749 21.6248 10.7249 21.2748C10.3749 20.9248 10.1999 20.4998 10.1999 19.9998H13.7999C13.7999 20.4998 13.6249 20.9248 13.2749 21.2748C12.9249 21.6248 12.4999 21.7998 11.9999 21.7998ZM7.7499 17.3748H14.9749L7.7999 10.1748C7.78324 10.2415 7.7709 10.3121 7.7629 10.3868C7.75424 10.4621 7.7499 10.5331 7.7499 10.5998V17.3748Z" fill="white"/>
    </svg>
  </div>
);

const HeadphoneIcon = () => (
  <div className="flex items-center justify-center w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5.55 17.5H2.3C1.8 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.2 0.5 15.7V9C0.5 7.81667 0.725 6.71267 1.175 5.688C1.625 4.66267 2.23333 3.76667 3 3C3.76667 2.23333 4.66267 1.625 5.688 1.175C6.71267 0.725 7.81667 0.5 9 0.5C10.1833 0.5 11.2873 0.725 12.312 1.175C13.3373 1.625 14.2333 2.23333 15 3C15.7667 3.76667 16.375 4.66267 16.825 5.688C17.275 6.71267 17.5 7.81667 17.5 9V15.7C17.5 16.2 17.325 16.625 16.975 16.975C16.625 17.325 16.2 17.5 15.7 17.5H12.45V10.425H16V9C16 7.05 15.3207 5.39567 13.962 4.037C12.604 2.679 10.95 2 9 2C7.05 2 5.396 2.679 4.038 4.037C2.67933 5.39567 2 7.05 2 9V10.425H5.55V17.5ZM4.05 11.925H2V15.7C2 15.7667 2.03333 15.8333 2.1 15.9C2.16667 15.9667 2.23333 16 2.3 16H4.05V11.925ZM13.95 11.925V16H15.7C15.7667 16 15.8333 15.9667 15.9 15.9C15.9667 15.8333 16 15.7667 16 15.7V11.925H13.95ZM13.95 11.925H16C16 11.925 15.9667 11.925 15.9 11.925C15.8333 11.925 15.7667 11.925 15.7 11.925H13.95ZM4.05 11.925H2.3C2.23333 11.925 2.16667 11.925 2.1 11.925C2.03333 11.925 2 11.925 2 11.925H4.05Z" fill="white"/>
    </svg>
  </div>
);

const ThreeDotIcon = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#1E1E1E] transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12ZM12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5ZM18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z" fill="white"/>
    </svg>
  </div>
);

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, onEdit, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-48 bg-[#232323] rounded-md shadow-lg z-10">
      <div className="py-1">
        <button onClick={onEdit} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#282828]">
          <span className="mr-2 w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6.08342 15.9168L5.75008 13.3752C5.52786 13.3057 5.3023 13.2016 5.07342 13.0627C4.84397 12.9238 4.63203 12.7779 4.43758 12.6252L2.08342 13.6252L0.166748 10.2918L2.20842 8.75016C2.18064 8.62516 2.16341 8.50016 2.15675 8.37516C2.14953 8.25016 2.14591 8.12516 2.14591 8.00016C2.14591 7.88905 2.14953 7.771 2.15675 7.646C2.16341 7.521 2.18064 7.38905 2.20842 7.25016L0.166748 5.7085L2.08342 2.396L4.43758 3.37516C4.63203 3.22238 4.84397 3.08016 5.07342 2.9485C5.3023 2.81627 5.52786 2.7085 5.75008 2.62516L6.08342 0.0834961H9.91675L10.2501 2.62516C10.5001 2.72239 10.7256 2.82988 10.9268 2.94766C11.1284 3.066 11.3334 3.2085 11.5417 3.37516L13.9167 2.396L15.8334 5.7085L13.7709 7.271C13.7987 7.40988 13.8126 7.53488 13.8126 7.646C13.8126 7.75711 13.8126 7.87516 13.8126 8.00016C13.8126 8.11127 13.809 8.22572 13.8017 8.3435C13.7951 8.46183 13.7779 8.59738 13.7501 8.75016L15.7917 10.2918L13.8751 13.6252L11.5417 12.6252C11.3334 12.7918 11.1217 12.9377 10.9067 13.0627C10.6912 13.1877 10.4723 13.2918 10.2501 13.3752L9.91675 15.9168H6.08342ZM8.00008 10.5002C8.69453 10.5002 9.2848 10.2571 9.77092 9.771C10.257 9.28488 10.5001 8.69461 10.5001 8.00016C10.5001 7.30572 10.257 6.71544 9.77092 6.22933C9.2848 5.74322 8.69453 5.50016 8.00008 5.50016C7.30564 5.50016 6.71536 5.74322 6.22925 6.22933C5.74314 6.71544 5.50008 7.30572 5.50008 8.00016C5.50008 8.69461 5.74314 9.28488 6.22925 9.771C6.71536 10.2571 7.30564 10.5002 8.00008 10.5002ZM8.00008 9.25016C7.65286 9.25016 7.35786 9.1285 7.11508 8.88516C6.87175 8.64238 6.75008 8.34738 6.75008 8.00016C6.75008 7.65294 6.87175 7.35794 7.11508 7.11516C7.35786 6.87183 7.65286 6.75016 8.00008 6.75016C8.3473 6.75016 8.6423 6.87183 8.88508 7.11516C9.12842 7.35794 9.25008 7.65294 9.25008 8.00016C9.25008 8.34738 9.12842 8.64238 8.88508 8.88516C8.6423 9.1285 8.3473 9.25016 8.00008 9.25016ZM7.16675 14.6668H8.81258L9.10425 12.4377C9.53481 12.3266 9.92369 12.1668 10.2709 11.9585C10.6181 11.7502 10.9584 11.4863 11.2917 11.1668L13.3542 12.0418L14.1876 10.6252L12.3751 9.271C12.4445 9.04877 12.4898 8.8335 12.5109 8.62516C12.5315 8.41683 12.5417 8.2085 12.5417 8.00016C12.5417 7.77794 12.5315 7.56627 12.5109 7.36516C12.4898 7.1635 12.4445 6.9585 12.3751 6.75016L14.1876 5.37516L13.3751 3.9585L11.2709 4.8335C10.9931 4.54183 10.6598 4.28127 10.2709 4.05183C9.88203 3.82294 9.49314 3.65989 9.10425 3.56266L8.83342 1.3335H7.18758L6.89592 3.56266C6.47925 3.65989 6.09036 3.81266 5.72925 4.021C5.36814 4.22933 5.02092 4.49322 4.68758 4.81266L2.62508 3.9585L1.81258 5.37516L3.60425 6.7085C3.5348 6.91683 3.48619 7.12516 3.45842 7.3335C3.43064 7.54183 3.41675 7.76405 3.41675 8.00016C3.41675 8.22238 3.43064 8.43766 3.45842 8.646C3.48619 8.85433 3.5348 9.06266 3.60425 9.271L1.81258 10.6252L2.62508 12.0418L4.68758 11.1668C5.00703 11.4863 5.3473 11.7502 5.70842 11.9585C6.06953 12.1668 6.46536 12.3266 6.89592 12.4377L7.16675 14.6668Z" fill="white" fill-opacity="0.56"/>
          </svg>
          </span>
          Edit
        </button>
        <button className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#282828]">
          <span className="mr-2 w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M7.99992 14.9375L7.06242 14.1042C4.95131 12.2014 3.2602 10.5486 1.98909 9.14583C0.71853 7.74306 0.083252 6.29167 0.083252 4.79167C0.083252 3.61111 0.482696 2.62139 1.28159 1.8225C2.07992 1.02417 3.06936 0.625 4.24992 0.625C4.91658 0.625 5.57992 0.781111 6.23992 1.09333C6.89936 1.40611 7.48603 1.90972 7.99992 2.60417C8.51381 1.90972 9.10075 1.40611 9.76075 1.09333C10.4202 0.781111 11.0833 0.625 11.7499 0.625C12.9305 0.625 13.9199 1.02417 14.7183 1.8225C15.5171 2.62139 15.9166 3.61111 15.9166 4.79167C15.9166 6.29167 15.281 7.74306 14.0099 9.14583C12.7394 10.5486 11.0485 12.2014 8.93742 14.1042L7.99992 14.9375ZM7.99992 13.25C9.98603 11.4444 11.5938 9.88889 12.8233 8.58333C14.0521 7.27778 14.6666 6.01389 14.6666 4.79167C14.6666 3.95833 14.3888 3.26389 13.8333 2.70833C13.2777 2.15278 12.5833 1.875 11.7499 1.875C11.0971 1.875 10.493 2.05556 9.93742 2.41667C9.38186 2.77778 8.93742 3.30556 8.60408 4H7.39575C7.06242 3.30556 6.61797 2.77778 6.06242 2.41667C5.50686 2.05556 4.9027 1.875 4.24992 1.875C3.41659 1.875 2.72214 2.15278 2.16659 2.70833C1.61103 3.26389 1.33325 3.95833 1.33325 4.79167C1.33325 6.01389 1.94797 7.27778 3.17742 8.58333C4.40631 9.88889 6.01381 11.4444 7.99992 13.25Z" fill="white" fill-opacity="0.56"/>
            </svg>
          </span>
          Favourite
        </button>
        <button onClick={onDelete} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#282828]">
          <span className="mr-2 w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.91667 15.8332H13.0833C13.1389 15.8332 13.1944 15.8054 13.25 15.7498C13.3056 15.6943 13.3333 15.6387 13.3333 15.5832V7.49984H6.66667V15.5832C6.66667 15.6387 6.69444 15.6943 6.75 15.7498C6.80556 15.8054 6.86111 15.8332 6.91667 15.8332ZM4.6875 5.24984V3.99984H7.16667L8 3.1665H12L12.8333 3.99984H15.3125V5.24984H4.6875ZM6.91667 17.0832C6.5 17.0832 6.14583 16.9373 5.85417 16.6457C5.5625 16.354 5.41667 15.9998 5.41667 15.5832V6.24984H14.5833V15.5832C14.5833 15.9998 14.4375 16.354 14.1458 16.6457C13.8542 16.9373 13.5 17.0832 13.0833 17.0832H6.91667ZM6.66667 15.8332H13.3333C13.3333 15.8332 13.3056 15.8332 13.25 15.8332C13.1944 15.8332 13.1389 15.8332 13.0833 15.8332H6.91667C6.86111 15.8332 6.80556 15.8332 6.75 15.8332C6.69444 15.8332 6.66667 15.8332 6.66667 15.8332Z" fill="white" fill-opacity="0.56"/>
            </svg>
          </span>
          Remove
        </button>
      </div>
    </div>
  );
};

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [editingContact, setEditingContact] = useState<ContactModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/getContacts');
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched data:', data);
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received from server');
      }
      
      setContacts(data);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(`Error fetching contacts: ${error.message}`);
      } else {
        setError('An unknown error occurred while fetching contacts');
      }
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropdown = (contactId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === contactId ? null : contactId);
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    if (activeDropdown !== null && !(event.target as Element).closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  const handleEditContact = (contact: ContactModel) => {
    setEditingContact(contact);
    setActiveDropdown(null);
  };

  const handleSaveEdit = async (updatedContact: ContactModel) => {
    try {
      const response = await fetch(`/api/[id]/${updatedContact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContact)
      });
      if (response.ok) {
        await fetchContacts();
        setEditingContact(null);
      } else {
        throw new Error('Failed to update contact');
      }
    } catch (error) {
      console.error('Error updating contact:', error);
      setError('Failed to update contact. Please try again.');
    }
  };

  const handleDeleteContact = async (contactId: number) => {
    try {
      const response = await fetch(`/api/[id]/${contactId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        await fetchContacts();
      } else {
        throw new Error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      setError('Failed to delete contact. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="text-white text-center py-4">Loading contacts...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="w-full md:w-[720px] mx-auto" onClick={handleClickOutside}>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center justify-between py-4 px-4 group relative">
            <div className="flex items-center space-x-3">
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
            </div>
            <div className="flex items-center justify-evenly space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <BellIcon />
              <HeadphoneIcon />
              <div className="relative dropdown-container">
                <button onClick={(e) => toggleDropdown(contact.id, e)}>
                  <ThreeDotIcon />
                </button>
                <DropdownMenu 
                  isOpen={activeDropdown === contact.id}
                  onClose={() => setActiveDropdown(null)}
                  onEdit={() => handleEditContact(contact)}
                  onDelete={() => handleDeleteContact(contact.id)}
                />
              </div>
            </div>
          </li>
        ))}
     </ul>
      {editingContact && (
        <EditContactModal
          isOpen={true}
          onClose={() => setEditingContact(null)}
          onEdit={handleSaveEdit}
          contact={editingContact}
        />
      )}
    </div>
  );
};


export default ContactList;