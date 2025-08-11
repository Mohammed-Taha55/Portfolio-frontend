export default function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-black bg-opacity-40 backdrop-blur-md"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-16 w-96 h-96 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-12 right-16 w-96 h-96 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-gray-300">
        {children}
      </div>
    </section>
  );
}
