import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

/* ===========================================================
   MHC Hospital – Contact Page (Ultra Premium Design)
   Designed by Varghese G T
   =========================================================== */
export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const message = encodeURIComponent(
      `💬 *New Inquiry from MHC Website*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📝 Message: ${form.message}`
    );
    window.open(`https://wa.me/919092357100?text=${message}`, "_blank");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-gray-900">
      {/* Floating gradient glows */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-blue-400/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/20 blur-[160px] rounded-full" />

      <section className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a question or need an appointment? We’re here 24×7 to assist
            you with any medical or service inquiry.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm h-28 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              <Send size={16} />
              Send Message via WhatsApp
            </motion.button>
          </form>

          {/* Quick Contact */}
          <div className="mt-8 space-y-3 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-emerald-600" />
              <span>+91 80980 96555</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-emerald-600" />
              <span>info@mhchospital.com</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-600" />
              <span>Trichy, Tamil Nadu, India</span>
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919092357100?text=Hi%20MHC%20Hospital%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition"
          >
            <MessageSquare size={18} />
            Chat with Us on WhatsApp
          </a>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        >
          <iframe
            title="MHC Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0716731711564!2d78.70681427480532!3d10.805822589344729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5ec3a24e03d%3A0x2b45aa49336663d5!2sDr.%20Murugan%27s%20Health%20Care%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1756304531441!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            className="w-full h-[500px] border-0"
          ></iframe>

          {/* Overlay Label */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
            📍 MHC Hospital – Trichy, Tamil Nadu
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-center bg-gradient-to-r from-blue-900 via-emerald-700 to-teal-600 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let’s Make Your Health Our Priority
          </h3>
          <p className="text-blue-100 mb-8">
            Whether you have a query, need emergency help, or want to schedule a
            check-up — we’re just one click away.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
          >
            Book an Appointment
          </a>
        </motion.div>
      </section>
    </div>
  );
}
