import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-white">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/25 rounded-full blur-[180px]" />
      </div>

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

        {/* Brand / About */}
        <div>
          <h4 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent pb-2">
            MHC Hospital
          </h4>

          <p className="text-blue-100 leading-relaxed text-sm pr-6">
            World-class medical expertise, compassionate care, modern facilities,
            and <span className="text-cyan-300 font-semibold">AFFORDABLE – all in one place.</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-white/10 hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-md shadow-lg"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Contact Us</h4>
          <ul className="space-y-4 text-blue-100 text-sm">

            <li className="flex items-center gap-3 hover:text-white transition">
              <span className="p-2 rounded-xl bg-blue-700 shadow-md">
                <FaPhoneAlt size={13} />
              </span>
              +91 80980 96555
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <span className="p-2 rounded-xl bg-blue-700 shadow-md">
                <FaEnvelope size={13} />
              </span>
              info@mhchospital.com
            </li>

            <li className="flex items-center gap-3 hover:text-white transition leading-tight">
              <span className="p-2 rounded-xl bg-blue-700 shadow-md">
                <FaMapMarkerAlt size={13} />
              </span>
              Trichy, Tamil Nadu, India
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm text-blue-100">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Departments", "/departments"],
              ["Doctors", "/doctors"],
              ["Contact", "/contact"],
              ["Book Appointment", "/appointment"],
            ].map(([label, link]) => (
              <li key={label}>
                <Link
                  to={link}
                  className="hover:text-white transition-all duration-300 hover:pl-1 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Locate Us</h4>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-cyan-500/30 transition-all">
            <iframe
              title="MHC Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0716731711564!2d78.70681427480532!3d10.805822589344729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5ec3a24e03d%3A0x2b45aa49336663d5!2sDr.%20Murugan%27s%20Health%20Care%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1756304531441!5m2!1sen!2sin"
              width="100%"
              height="230"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-blue-950/40 backdrop-blur-md py-5 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white">

        <p className="text-white">
          © 2025 MHC Hospital. All Rights Reserved.
        </p>

        <a
          href="#top"
          className="group flex items-center gap-2 mt-3 md:mt-0 hover:text-white transition"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition" />
          Back to Top
        </a>

      </div>

    </footer>
  );
}
