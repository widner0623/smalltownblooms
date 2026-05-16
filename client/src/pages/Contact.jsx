import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { GiRose } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }

      setStatus(data.message || "Message sent successfully.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      setStatus("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#2d201c]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-28 pt-40">
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
              <GiRose className="text-[#b85f68]" />
              <span className="text-sm font-semibold tracking-wide text-[#7a5a50]">
                Let’s Create Something Beautiful
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Contact
              <span className="block italic text-[#b85f68]">
                Small Town Blooms
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6b5148]">
              Whether you’re ordering flowers, planning a wedding, or designing
              florals for an event, we’d love to hear from you.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2.5rem] border border-[#f0ded8] bg-white/80 p-8 shadow-xl backdrop-blur-md md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="rounded-full border border-[#ead3cc] bg-[#fff8f3] px-6 py-4 outline-none focus:border-[#b85f68]"
                  placeholder="First Name"
                  required
                />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="rounded-full border border-[#ead3cc] bg-[#fff8f3] px-6 py-4 outline-none focus:border-[#b85f68]"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-full border border-[#ead3cc] bg-[#fff8f3] px-6 py-4 outline-none focus:border-[#b85f68]"
                  placeholder="Email Address"
                  required
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-full border border-[#ead3cc] bg-[#fff8f3] px-6 py-4 outline-none focus:border-[#b85f68]"
                  placeholder="Phone Number"
                />
              </div>

              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="mt-5 w-full rounded-full border border-[#ead3cc] bg-[#fff8f3] px-6 py-4 outline-none focus:border-[#b85f68]"
                required
              >
                <option value="">What are you interested in?</option>
                <option value="Everyday Flowers">Everyday Flowers</option>
                <option value="Wedding Florals">Wedding Florals</option>
                <option value="Event Florals">Event Florals</option>
                <option value="Sympathy Arrangement">
                  Sympathy Arrangement
                </option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-5 min-h-44 w-full rounded-[2rem] border border-[#ead3cc] bg-[#fff8f3] px-6 py-5 outline-none focus:border-[#b85f68]"
                placeholder="Tell us what you’re looking for..."
                required
              />

              {status && (
                <p className="mt-5 rounded-2xl bg-[#f5e7e2] px-5 py-4 text-sm font-semibold text-[#7a5a50]">
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaArrowRight />
              </button>
            </form>

            <div className="space-y-5">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  text: "(555) 123-4567",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "info@smalltownblooms.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  text: "Beaver Dam, Kentucky",
                },
                {
                  icon: <FaClock />,
                  title: "Hours",
                  text: "Monday - Friday • 9AM - 5PM",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#f0ded8] bg-white/80 p-7 shadow-sm backdrop-blur-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ddd8] text-xl text-[#b85f68]">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-2 text-[#6b5148]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;