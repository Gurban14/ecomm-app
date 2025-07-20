import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen font-sans mt-10 mb-32">
        <div className="w-1/2 bg-[#40BFFF] text-white flex flex-col justify-center items-center px-12 relative">
          <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center leading-tight">
            get in<br />touch
          </h2>

          <div className="text-sm sm:text-base space-y-6 text-center">
            <p>contact@e-comm.ng</p>
            <p>*234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki<br />Phase 1, Lagos.</p>
          </div>

          <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 w-20 h-20 bg-white rounded-full" />
        </div>

        <div className="w-1/2 bg-white flex flex-col justify-center px-12 py-16 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Fullname</label>
            <input
              type="text"
              defaultValue="James Doe"
              className="w-full border border-gray-300 p-4 rounded-sm outline-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              defaultValue="jamesdoe@gmail.com"
              className="w-full border border-gray-300 p-4 rounded-sm outline-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Type your message"
              className="w-full border border-gray-300 p-4 h-40 resize-none rounded-sm outline-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20 mt-[110px]">
            <div className="w-[635px] h-[64px] flex rounded-[5px] overflow-hidden border border-blue-300">
              <input
                type="text"
                placeholder="Search query..."
                className="flex-1 px-6 text-base font-proxima text-gray-500 placeholder-gray-400 focus:outline-none"
                style={{ backgroundColor: '#ffffff' }}
              />
              <button
                className="w-[126px] bg-global-2 text-global-12 font-poppins text-base font-semibold px-4 py-2 flex items-center justify-center rounded-r-[5px] focus:outline-none"
              >
                Search
              </button>
            </div>
        </div>
      

      <Footer />
    </>
  );
};

export default ContactPage;
