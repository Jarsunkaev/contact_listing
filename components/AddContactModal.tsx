import React, { useState } from 'react';
import Image from 'next/image';

const AddContactModal = ({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (contact: { name: string; phone: string; email: string; image?: File }) => void }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ name, phone, email, ...(image && { image }) });
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1C1C1C] text-white rounded-lg w-[364px] h-[540px] p-6 flex flex-col">
        <h2 className="text-[32px] font-glysa mb-6">Add contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6 flex-grow overflow-y-auto">
          <div className="flex items-center space-x-4">
            <div className="w-[88px] h-[88px] bg-gray-600 rounded-full overflow-hidden flex-shrink-0 relative">
              <Image
                src={previewUrl || "/profile.png"}
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex space-x-2">
              {!previewUrl ? (
                <label 
                  htmlFor="image-upload"
                  className="w-[139px] h-[40px] bg-[#282828] text-white rounded-md hover:bg-[#353535] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <path d="M11.25 18.75V12.75H5.25V11.25H11.25V5.25H12.75V11.25H18.75V12.75H12.75V18.75H11.25Z" fill="white"/>
                  </svg>
                  Add picture
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <>
                  <label 
                    htmlFor="image-upload"
                    className="w-[164px] h-[40px] bg-[#282828] text-white rounded-md hover:bg-[#353535] transition-colors flex items-center justify-center cursor-pointer text-[14px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
                      <path d="M15.65 5.0001L11.975 8.6501L10.925 7.6001L12.775 5.7501H12C10.2667 5.7501 8.79167 6.36243 7.575 7.5871C6.35833 8.81243 5.75 10.3001 5.75 12.0501C5.75 12.4668 5.796 12.8791 5.888 13.2871C5.97933 13.6958 6.11667 14.1001 6.3 14.5001L5.175 15.6251C4.875 15.0584 4.646 14.4751 4.488 13.8751C4.32933 13.2751 4.25 12.6668 4.25 12.0501C4.25 9.88343 5.00433 8.04176 6.513 6.5251C8.021 5.00843 9.85 4.2501 12 4.2501H12.775L10.925 2.4001L11.975 1.3501L15.65 5.0001ZM8.35 19.0001L12.025 15.3501L13.075 16.4001L11.225 18.2501H12C13.7333 18.2501 15.2083 17.6378 16.425 16.4131C17.6417 15.1878 18.25 13.7001 18.25 11.9501C18.25 11.5334 18.2043 11.1208 18.113 10.7121C18.021 10.3041 17.8833 9.9001 17.7 9.5001L18.825 8.3751C19.125 8.94176 19.3543 9.5251 19.513 10.1251C19.671 10.7251 19.75 11.3334 19.75 11.9501C19.75 14.1168 18.996 15.9584 17.488 17.4751C15.9793 18.9918 14.15 19.7501 12 19.7501H11.225L13.075 21.6001L12.025 22.6501L8.35 19.0001Z" fill="white"/>
                    </svg>
                    Change picture
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="w-[40px] h-[40px] bg-[#282828] text-white rounded-md hover:bg-[#353535] transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                      <path d="M3.3 16H10.7C10.7667 16 10.8333 15.9667 10.9 15.9C10.9667 15.8334 11 15.7667 11 15.7V6.00005H3V15.7C3 15.7667 3.03333 15.8334 3.1 15.9C3.16667 15.9667 3.23333 16 3.3 16ZM0.625 3.30005V1.80005H3.6L4.6 0.800049H9.4L10.4 1.80005H13.375V3.30005H0.625ZM3.3 17.5C2.8 17.5 2.375 17.3251 2.025 16.975C1.675 16.625 1.5 16.2 1.5 15.7V4.50005H12.5V15.7C12.5 16.2 12.325 16.625 11.975 16.975C11.625 17.3251 11.2 17.5 10.7 17.5H3.3ZM3 16H11C11 16 10.9667 16 10.9 16C10.8333 16 10.7667 16 10.7 16H3.3C3.23333 16 3.16667 16 3.1 16C3.03333 16 3 16 3 16Z" fill="white"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Jamie Wright"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#282828] text-white p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+01 234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#282828] text-white p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="jamie.wright@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#282828] text-white p-2 rounded-md"
            />
          </div>
        </form>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-transparent text-white hover:bg-[#282828] rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="contact-form"
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;