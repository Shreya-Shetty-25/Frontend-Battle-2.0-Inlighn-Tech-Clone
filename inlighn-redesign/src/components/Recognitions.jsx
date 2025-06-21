export default function Recognitions() {
  const recognitions = [
    {
      name: "Ministry of Corporate Affairs",
      url: "https://www.inlighntech.com/wp-content/uploads/2025/04/mca-1.webp",
      bg: "bg-white rounded-3xl p-4",
    },
    {
      name: "ISO",
      url: "https://www.inlighntech.com/wp-content/uploads/2025/04/iso-1.png",
      bg: "bg-white rounded-3xl p-6",
    },
    {
      name: "Startup India",
      url: "https://www.inlighntech.com/wp-content/uploads/2025/04/startup-india-logo-gradient-circle.png",
      bg: "bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full p-4",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-transparent relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Recognized & Trusted By
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 place-items-center">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className={`w-48 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center shadow-lg ${item.bg} 
              transform transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl
            `}
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-32 sm:w-36 md:w-40 max-h-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
