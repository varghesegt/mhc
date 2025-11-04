import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaUserMd,
  FaAward,
  FaHeartbeat,
  FaHospital,
  FaArrowUp,
} from "react-icons/fa";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "World-Class Cardiac Care",
      subtitle:
        "Advanced treatments & compassionate doctors ensuring healthy hearts.",
      img: "/images/hero1.jpg",
    },
    {
      id: 2,
      title: "24/7 Emergency Support",
      subtitle:
        "Always ready with state-of-the-art ICU and emergency response teams.",
      img: "/images/hero2.jpg",
    },
    {
      id: 3,
      title: "Modern Diagnostic Facilities",
      subtitle:
        "Accurate & quick diagnostics powered by cutting-edge technology.",
      img: "/images/hero3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4800
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] } },
  });

  /* ------------------------------------------------------------ */
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-emerald-50 via-white to-blue-50 text-gray-900">
      
      {/* =================== HERO (Cinematic Motion) =================== */}
      <section className="relative h-[90vh] sm:h-screen overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_ease-in-out_infinite]"
            />
            {/* Dynamic layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <motion.h1
            key={slides[current].title}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-200 to-blue-300 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={slides[current].subtitle}
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md"
          >
            {slides[current].subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="show"
            className="mt-10"
          >
            <Link
              to="/departments"
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-400 to-sky-500
                         text-white font-semibold shadow-[0_0_25px_rgba(34,197,94,0.45)]
                         hover:shadow-[0_0_35px_rgba(34,197,94,0.65)] hover:scale-105
                         transition-all duration-300"
            >
              Explore Departments
            </Link>
          </motion.div>
        </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.img
          src="/logo.png"
          alt="MHC Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          viewport={{ once: true }}
          className="w-56 sm:w-72 object-contain mx-auto md:mx-0 drop-shadow-2xl"
        />
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/85 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              MHC Hospital
            </span>
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At <strong>MHC (Dr. Murugan’s Health Care Specialty Hospital)</strong>, 
            we redefine patient care with empathy, precision, and innovation — 
            delivering a connected, compassionate healthcare experience.
          </p>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-green-400/40 transition-transform duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </section>

      {/* =================== WHY CHOOSE US =================== */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_0%,rgba(16,185,129,0.2),transparent),radial-gradient(700px_300px_at_100%_100%,rgba(56,189,248,0.2),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-emerald-900 mb-16">
            Why Choose <span className="text-blue-600">MHC</span>?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaHeartbeat className="text-4xl text-blue-600" />,
                title: "Comprehensive Care",
                desc: "All specialties under one roof, providing continuous and personalized care.",
              },
              {
                icon: <FaUserMd className="text-4xl text-green-600" />,
                title: "Expert Specialists",
                desc: "Doctors trained at global institutions with decades of clinical excellence.",
              },
              {
                icon: <FaAward className="text-4xl text-indigo-600" />,
                title: "Trusted Excellence",
                desc: "Recognized for innovation, safety, and outstanding treatment outcomes.",
              },
              {
                icon: <FaHospital className="text-4xl text-pink-600" />,
                title: "Next-Gen Facilities",
                desc: "AI-driven diagnostics, IoT vitals, and telemedicine integrations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-white/50 hover:shadow-2xl transition-all"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-xl mb-2 text-emerald-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FOUNDERS =================== */}
<section className="py-24 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14">
      Meet Our <span className="text-green-600">Founders</span>
    </h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Dr. Murugan",
          role: "The Brain Behind MHC",
          img: "/team/murugan.jpg",
          desc:
            "Chief Medical Director and the brain behind MHC’s advanced clinical infrastructure, Dr. Murugan’s expertise in multidisciplinary care drives medical excellence.",
        },
        {
          name: "Dr. Sundaravel",
          role: "Founder & Visionary",
          img: "/team/sundaravel.jpg",
          desc:
            "Founder of MHC Hospital and the driving force behind its vision — Dr. Sundaravel blends innovation with empathy, building India’s next-gen connected healthcare ecosystem.",
        },
        {
          name: "Dr. Lavanya",
          role: "Co-Founder & Operations Head",
          img: "/team/lavanya.jpg",
          desc:
            "A pioneer in patient-centric administration, Dr. Lavanya ensures every process at MHC embodies compassion, precision, and efficiency.",
        },
      ].map((person, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, scale: 1.04 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-xl border border-gray-100 hover:border-green-300 transition-all"
        >
          <div className="relative">
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-0 w-full text-center">
              <h4 className="text-xl font-bold text-white drop-shadow-lg">
                {person.name}
              </h4>
              <p className="text-sm text-green-200">{person.role}</p>
            </div>
          </div>

          <div className="p-6 text-gray-700 text-sm leading-relaxed">
            {person.desc}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* =================== STATS (Emerald • Rich White) =================== */}
<section className="relative py-24 text-white text-center bg-emerald-700 overflow-hidden">
  {/* subtle vignette for depth (still green base) */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,rgba(255,255,255,0.18),transparent_70%)]" />

  <div className="relative max-w-6xl mx-auto px-6">
    <motion.h3
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22,0.61,0.36,1] }}
      className="text-3xl md:text-4xl font-extrabold mb-12 drop-shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
    >
      Our Impact in Numbers
    </motion.h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { count: "25+", label: "Years of Excellence" },
        { count: "1L+", label: "Patients Treated" },
        { count: "120+", label: "Specialized Staff" },
        { count: "50+", label: "Awards Won" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22,0.61,0.36,1] }}
          className="rounded-3xl p-8 bg-white/10 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.3)] transition-shadow"
        >
          {/* number */}
          <h4 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 text-white drop-shadow">
            {stat.count}
          </h4>
          {/* label */}
          <p className="text-white/90 text-sm md:text-base font-medium">
            {stat.label}
          </p>
          {/* accent underline */}
          <div className="mx-auto mt-6 h-px w-14 bg-white/30 group-hover:w-24 transition-all duration-500" />
          <div className="mt-3 text-[12px] text-white/70">
            Updated quarterly • Verified internally
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* =================== TESTIMONIALS =================== */}
      <section className="py-24 bg-gradient-to-t from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-blue-900 mb-14">
            What Our Patients Say
          </h3>
          <div className="space-y-10">
            {[
              {
                name: "Ravi Kumar",
                msg: "The doctors at MHC saved my life during a cardiac emergency. Truly world-class care!",
              },
              {
                name: "Lakshmi Devi",
                msg: "From admission to discharge, the staff were so compassionate. MHC made me feel safe.",
              },
              {
                name: "John Mathew",
                msg: "Highly recommend MHC. Their technology and patient focus are unmatched in Tamil Nadu.",
              },
            ].map((rev, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <p className="text-gray-700 italic mb-4">“{rev.msg}”</p>
                <h4 className="font-bold text-blue-900">{rev.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CONTACT =================== */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-600 to-indigo-700"
          >
            Get in Touch
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Us",
                desc: "No. 123, Health Street, Chennai, India",
                href: "https://maps.google.com/?q=MHC+Hospital,+Chennai",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                desc: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: <FaWhatsapp />,
                title: "Chat on WhatsApp",
                desc: "Instant support available",
                href: "https://wa.me/919876543210",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                desc: "info@mhchospital.com",
                href: "mailto:info@mhchospital.com",
              },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <span className="p-4 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full shadow-md">
                  {c.icon}
                </span>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
