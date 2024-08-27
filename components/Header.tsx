import React from 'react';

const Header = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full pr-6">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 27.625L12.375 20L20 12.375L21.075 13.45L15.25 19.25H27.625V20.75H15.25L21.075 26.55L20 27.625Z" fill="white"/>
        </svg>
      </div>
      
      <div className="w-full md:w-[720px] mx-auto">
        <header className="flex justify-between items-center p-4">
        <h1 className="text-[32px] font-medium text-gray-100 pl-4 font-glysa">Contacts</h1>
          
          <div className="flex items-center space-x-4 pr-4">
            <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.7001 19.5L7.3001 16.45C7.03343 16.3667 6.76276 16.2417 6.4881 16.075C6.21277 15.9083 5.95843 15.7333 5.7251 15.55L2.9001 16.75L0.600098 12.75L3.0501 10.9C3.01676 10.75 2.9961 10.6 2.9881 10.45C2.97943 10.3 2.9751 10.15 2.9751 10C2.9751 9.86667 2.97943 9.725 2.9881 9.575C2.9961 9.425 3.01676 9.26667 3.0501 9.1L0.600098 7.25L2.9001 3.275L5.7251 4.45C5.95843 4.26667 6.21277 4.096 6.4881 3.938C6.76276 3.77933 7.03343 3.65 7.3001 3.55L7.7001 0.5H12.3001L12.7001 3.55C13.0001 3.66667 13.2708 3.79567 13.5121 3.937C13.7541 4.079 14.0001 4.25 14.2501 4.45L17.1001 3.275L19.4001 7.25L16.9251 9.125C16.9584 9.29167 16.9751 9.44167 16.9751 9.575C16.9751 9.70833 16.9751 9.85 16.9751 10C16.9751 10.1333 16.9708 10.2707 16.9621 10.412C16.9541 10.554 16.9334 10.7167 16.9001 10.9L19.3501 12.75L17.0501 16.75L14.2501 15.55C14.0001 15.75 13.7461 15.925 13.4881 16.075C13.2294 16.225 12.9668 16.35 12.7001 16.45L12.3001 19.5H7.7001ZM10.0001 13C10.8334 13 11.5418 12.7083 12.1251 12.125C12.7084 11.5417 13.0001 10.8333 13.0001 10C13.0001 9.16667 12.7084 8.45833 12.1251 7.875C11.5418 7.29167 10.8334 7 10.0001 7C9.16677 7 8.45843 7.29167 7.8751 7.875C7.29177 8.45833 7.0001 9.16667 7.0001 10C7.0001 10.8333 7.29177 11.5417 7.8751 12.125C8.45843 12.7083 9.16677 13 10.0001 13ZM10.0001 11.5C9.58343 11.5 9.22943 11.354 8.9381 11.062C8.6461 10.7707 8.5001 10.4167 8.5001 10C8.5001 9.58333 8.6461 9.22933 8.9381 8.938C9.22943 8.646 9.58343 8.5 10.0001 8.5C10.4168 8.5 10.7708 8.646 11.0621 8.938C11.3541 9.22933 11.5001 9.58333 11.5001 10C11.5001 10.4167 11.3541 10.7707 11.0621 11.062C10.7708 11.354 10.4168 11.5 10.0001 11.5ZM9.0001 18H10.9751L11.3251 15.325C11.8418 15.1917 12.3084 15 12.7251 14.75C13.1418 14.5 13.5501 14.1833 13.9501 13.8L16.4251 14.85L17.4251 13.15L15.2501 11.525C15.3334 11.2583 15.3878 11 15.4131 10.75C15.4378 10.5 15.4501 10.25 15.4501 10C15.4501 9.73333 15.4378 9.47933 15.4131 9.238C15.3878 8.996 15.3334 8.75 15.2501 8.5L17.4251 6.85L16.4501 5.15L13.9251 6.2C13.5918 5.85 13.1918 5.53733 12.7251 5.262C12.2584 4.98733 11.7918 4.79167 11.3251 4.675L11.0001 2H9.0251L8.6751 4.675C8.1751 4.79167 7.70843 4.975 7.2751 5.225C6.84176 5.475 6.4251 5.79167 6.0251 6.175L3.5501 5.15L2.5751 6.85L4.7251 8.45C4.64176 8.7 4.58343 8.95 4.5501 9.2C4.51677 9.45 4.5001 9.71667 4.5001 10C4.5001 10.2667 4.51677 10.525 4.5501 10.775C4.58343 11.025 4.64176 11.275 4.7251 11.525L2.5751 13.15L3.5501 14.85L6.0251 13.8C6.40843 14.1833 6.81677 14.5 7.2501 14.75C7.68343 15 8.15843 15.1917 8.6751 15.325L9.0001 18Z" fill="white"/>
            </svg>
            </button>

            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

            <button
              className="relative p-2 flex items-center justify-center text-white rounded-full w-[120px] h-[40px] text-sm leading-[14px] font-lexend-deca font-[400]"
              style={{
                backgroundColor: "#282828",
              }}
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  padding: "2px",
                  background: "linear-gradient(180deg, #3C3C3C 0%, rgba(60, 60, 60, 0) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  borderRadius: "inherit"
                }}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.5"
                height="13.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add New
            </button>




          </div>
        </header>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.75 16.5 9.68733 16.0627 8.812 15.188C7.93733 14.3127 7.5 13.25 7.5 12C7.5 10.75 7.93733 9.68733 8.812 8.812C9.68733 7.93733 10.75 7.5 12 7.5C13.25 7.5 14.3127 7.93733 15.188 8.812C16.0627 9.68733 16.5 10.75 16.5 12C16.5 13.25 16.0627 14.3127 15.188 15.188C14.3127 16.0627 13.25 16.5 12 16.5ZM2 12.75C1.78333 12.75 1.604 12.679 1.462 12.537C1.32067 12.3957 1.25 12.2167 1.25 12C1.25 11.7833 1.32067 11.604 1.462 11.462C1.604 11.3207 1.78333 11.25 2 11.25H4.25C4.46667 11.25 4.64567 11.3207 4.787 11.462C4.929 11.604 5 11.7833 5 12C5 12.2167 4.929 12.3957 4.787 12.537C4.64567 12.679 4.46667 12.75 4.25 12.75H2ZM19.75 12.75C19.5333 12.75 19.354 12.679 19.212 12.537C19.0707 12.3957 19 12.2167 19 12C19 11.7833 19.0707 11.604 19.212 11.462C19.354 11.3207 19.5333 11.25 19.75 11.25H22C22.2167 11.25 22.396 11.3207 22.538 11.462C22.6793 11.604 22.75 11.7833 22.75 12C22.75 12.2167 22.6793 12.3957 22.538 12.537C22.396 12.679 22.2167 12.75 22 12.75H19.75ZM12 5C11.7833 5 11.6043 4.929 11.463 4.787C11.321 4.64567 11.25 4.46667 11.25 4.25V2C11.25 1.78333 11.321 1.604 11.463 1.462C11.6043 1.32067 11.7833 1.25 12 1.25C12.2167 1.25 12.396 1.32067 12.538 1.462C12.6793 1.604 12.75 1.78333 12.75 2V4.25C12.75 4.46667 12.6793 4.64567 12.538 4.787C12.396 4.929 12.2167 5 12 5ZM12 22.75C11.7833 22.75 11.6043 22.6793 11.463 22.538C11.321 22.396 11.25 22.2167 11.25 22V19.75C11.25 19.5333 11.321 19.354 11.463 19.212C11.6043 19.0707 11.7833 19 12 19C12.2167 19 12.396 19.0707 12.538 19.212C12.6793 19.354 12.75 19.5333 12.75 19.75V22C12.75 22.2167 12.6793 22.396 12.538 22.538C12.396 22.6793 12.2167 22.75 12 22.75ZM6 7.05L4.75 5.825C4.6 5.675 4.529 5.49567 4.537 5.287C4.54567 5.079 4.61667 4.9 4.75 4.75C4.9 4.6 5.07933 4.525 5.288 4.525C5.496 4.525 5.675 4.6 5.825 4.75L7.05 6C7.2 6.15 7.275 6.325 7.275 6.525C7.275 6.725 7.2 6.9 7.05 7.05C6.91667 7.2 6.75 7.27067 6.55 7.262C6.35 7.254 6.16667 7.18333 6 7.05ZM18.175 19.25L16.95 18C16.8 17.85 16.725 17.675 16.725 17.475C16.725 17.275 16.8 17.1 16.95 16.95C17.0833 16.8 17.25 16.7293 17.45 16.738C17.65 16.746 17.8333 16.8167 18 16.95L19.25 18.175C19.4 18.325 19.471 18.504 19.463 18.712C19.4543 18.9207 19.3833 19.1 19.25 19.25C19.1 19.4 18.921 19.475 18.713 19.475C18.5043 19.475 18.325 19.4 18.175 19.25ZM16.95 7.05C16.8 6.91667 16.7293 6.75 16.738 6.55C16.746 6.35 16.8167 6.16667 16.95 6L18.175 4.75C18.325 4.6 18.5043 4.529 18.713 4.537C18.921 4.54567 19.1 4.61667 19.25 4.75C19.4 4.9 19.475 5.079 19.475 5.287C19.475 5.49567 19.4 5.675 19.25 5.825L18 7.05C17.85 7.2 17.675 7.275 17.475 7.275C17.275 7.275 17.1 7.2 16.95 7.05ZM4.75 19.25C4.6 19.1 4.525 18.9207 4.525 18.712C4.525 18.504 4.6 18.325 4.75 18.175L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.0833 7.271 17.25 7.263 17.45C7.25433 17.65 7.18333 17.8333 7.05 18L5.825 19.25C5.675 19.4 5.496 19.475 5.288 19.475C5.07933 19.475 4.9 19.4 4.75 19.25Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Header;
