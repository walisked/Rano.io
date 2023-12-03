import React, { useState } from 'react';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`font-sans antialiased ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} leading-normal tracking-wider bg-cover`} style={{ backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {/* Main Col */}
        <div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} opacity-75 mx-6 lg:mx-0`}>
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')" }}></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              What you do
            </p>
            {/* ... (rest of the content) ... */}
          </div>
        </div>

        {/* Img Col */}
        <div className="w-full lg:w-2/5">
          <img src="https://source.unsplash.com/MP0IUfwrn0A" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="Profile" />
        </div>

        {/* Pin to top right corner */}
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none" onClick={toggleTheme}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
