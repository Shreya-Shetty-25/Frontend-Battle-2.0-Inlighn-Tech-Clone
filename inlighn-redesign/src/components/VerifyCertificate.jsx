import React, { useState } from "react";

const VerifyCertificate = () => {
  const [internId, setInternId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verifying ID:", internId);
    // Insert your verification logic here
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-3xl text-center space-y-10">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white-800 transition-all duration-500">
          Verify Certificate
        </h2>

        {/* Label + Input + Button */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <label
            htmlFor="internId"
            className="block text-2xl md:text-3xl font-semibold text-white-700 transition-all duration-300"
          >
            Enter Intern ID:
          </label>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              id="internId"
              value={internId}
              onChange={(e) => setInternId(e.target.value)}
              placeholder="e.g., ITID000"
              className="w-full sm:w-3/4 px-4 py-4 text-lg border rounded-md bg-white-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
            <button
              type="submit"
              className="bg-teal-900 hover:bg-teal-800 text-white px-6 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
            >
              Verify
            </button>
          </div>
        </form>

        {/* Info Text */}
        <p className="text-lg md:text-xl text-white-900 font-medium transition-all duration-500 leading-relaxed">
          Enter your Intern ID (e.g., <strong>ITID000</strong>) in the field above to verify your internship certificate.<br />
          You can find your Intern ID on your offer letter or experience letter.
        </p>
      </div>
    </section>
  );
};

export default VerifyCertificate;
