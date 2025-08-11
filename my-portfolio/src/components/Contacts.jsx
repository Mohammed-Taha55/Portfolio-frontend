import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    botField: "", // Honeypot field for spam bots
  });
  const [status, setStatus] = useState(""); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          data?.errors?.map((err) => err.msg).join(", ") ||
          data?.message ||
          "Something went wrong."
        );
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "", botField: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div
        className="
          relative z-10
          max-w-5xl
          mx-auto
          bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40
          backdrop-blur-lg
          p-12 sm:p-16
          rounded-3xl
          shadow-2xl
          border border-white/30
          text-gray-200
          transition-shadow duration-500
          hover:shadow-pink-500/50
          w-full
        "
      >
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          {/* Hidden Honeypot Field */}
          <input
            type="text"
            name="botField"
            value={form.botField}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-8 py-4 rounded-lg font-semibold shadow-lg transition ${
              status === "sending"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 hover:shadow-pink-500/60"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "sent" && (
            <p className="text-green-400 text-center mt-4">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">❌ {errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
