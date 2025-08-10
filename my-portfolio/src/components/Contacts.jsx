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
      className="relative max-w-5xl mx-auto py-20 px-4 overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        className="max-w-xl mx-auto flex flex-col gap-4 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20"
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
          className="p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        ></textarea>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`px-6 py-3 rounded-lg transition shadow-lg ${
            status === "sending"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 hover:shadow-pink-500/50"
          }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status messages */}
        {status === "sent" && (
          <p className="text-green-400 text-center mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-2">❌ {errorMsg}</p>
        )}
      </form>
    </section>
  );
}
