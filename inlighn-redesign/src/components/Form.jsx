import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col items-center py-10" style={{ height: "600px" }}>
      <button
        className="bg-[#006d67] text-white font-semibold px-6 py-2 rounded-full mb-6
                   transition-colors duration-300 hover:bg-[#00514a]"
      >
        GET IN TOUCH
      </button>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Fill the form to contact us
      </h2>

      <div
        className="bg-[#002b35] p-6 md:p-10 rounded-[3rem] w-full max-w-screen-xl"
        style={{ height: "700px" }}
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { type: "text", placeholder: "Full Name" },
            { type: "email", placeholder: "Email" },
            { type: "text", placeholder: "Domain of Internship" },
            { type: "text", placeholder: "State" },
          ].map(({ type, placeholder }, idx) => (
            <input
              key={idx}
              type={type}
              placeholder={placeholder}
              className="p-4 rounded-md text-gray-800
                         transition-shadow duration-300
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg"
            />
          ))}

          {/* Message textarea spans both columns */}
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 rounded-md text-gray-800 md:col-span-2
                       transition-shadow duration-300
                       focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg"
          />

          {/* Submit button */}
          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-orange-500 text-white text-lg font-semibold px-8 py-3 rounded-md
                         transition-colors duration-300 hover:bg-orange-600 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
