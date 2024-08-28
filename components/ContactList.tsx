import React from 'react';
import Image from 'next/image';

const dummyContacts = [
  { id: 1, name: 'Timothy Lewis', phone: '(254) 555-0123', image: null },
  { id: 2, name: 'Sarah Wright', phone: '(555) 123-4567', image: null },
  { id: 3, name: 'Lucy Jones', phone: '(555) 987-6543', image: null },
  { id: 4, name: 'John Perez', phone: '(555) 246-8102', image: null },
  { id: 5, name: 'Anthony Rodriguez', phone: '(555) 369-2580', image: null },
];

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
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 12c0 .828-.672 1.5-1.5 1.5S3 12.828 3 12s.672-1.5 1.5-1.5S6 11.172 6 12zm6 0c0 .828-.672 1.5-1.5 1.5S9 12.828 9 12s.672-1.5 1.5-1.5S12 11.172 12 12zm6 0c0 .828-.672 1.5-1.5 1.5S15 12.828 15 12s.672-1.5 1.5-1.5S18 11.172 18 12z" fill="white"/>
    </svg>
  </div>
);




const ContactList = () => {
  
  return (
    <div className="w-full md:w-[720px] mx-auto">
      <ul className="space-y-4">
        {dummyContacts.map((contact) => (
          <li key={contact.id} className="flex items-center justify-between py-4 px-4 group">
            <div className="flex items-center space-x-3">
              <Image 
                src="/profile.png"
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
              <ThreeDotIcon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;