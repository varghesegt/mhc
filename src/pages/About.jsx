import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ===========================================================
   MHC Hospital – Ultra Premium "About" Page
   Designed & Authored by Varghese G T
   =========================================================== */

export default function About() {
  /* ─────────────────────────────
     Stats Section Data
  ───────────────────────────── */
  const stats = [
    { id: 1, number: 15000, label: "Patients Treated" },
    { id: 2, number: 120, label: "Expert Doctors" },
    { id: 3, number: 25, label: "Years of Excellence" },
    { id: 4, number: 50, label: "Medical Specialities" },
  ];

  /* ─────────────────────────────
     Leadership Data
  ───────────────────────────── */
  const leaders = [
    {
      id: 1,
      name: "Dr. Murugan",
      title: "Chief Medical Director",
      desc: "The visionary behind MHC’s clinical ecosystem — Dr. Murugan’s leadership fuses innovation with compassion, setting new benchmarks in multidisciplinary care.",
      img: "/images/leaders/murugan.jpg",
    },
    {
      id: 2,
      name: "Dr. Sundaravel",
      title: "Founder & Visionary",
      desc: "Founder of MHC Hospital and architect of its legacy — Dr. Sundaravel blends empathy, technology, and ethics to build India’s next-gen healthcare revolution.",
      img: "/images/leaders/sundaravel.jpg",
    },
    {
      id: 3,
      name: "Dr. Lavanya",
      title: "Co-Founder & Operations Head",
      desc: "An advocate of precision and compassion, Dr. Lavanya ensures every MHC process embodies warmth, quality, and operational brilliance.",
      img: "/images/leaders/lavanya.jpg",
    },
  ];

  /* ─────────────────────────────
     Animated Counter Helper
  ───────────────────────────── */
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const dur = 1500;
      const increment = end / (dur / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else setCount(Math.floor(start));
      }, 30);
      return () => clearInterval(timer);
    }, [end]);
    return count.toLocaleString();
  };

  /* ─────────────────────────────
     JSX
  ───────────────────────────── */
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-gray-900">
      {/* Floating Gradient Backgrounds */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-emerald-300/30 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-300/25 blur-[200px] rounded-full animate-pulse" />

      {/* Decorative particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.05)_0,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.05)_0,transparent_40%)]" />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center h-[80vh] px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-emerald-500 to-teal-600 drop-shadow-xl leading-tight">
            About MHC Hospital
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
            Transforming healthcare through empathy, innovation, and excellence
            — MHC Hospital redefines what it means to heal.
          </p>
        </motion.div>

        {/* Animated Glowing Orb */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.4 }}
          transition={{ repeat: Infinity, duration: 6, repeatType: "mirror" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-emerald-300 to-blue-300 rounded-full blur-3xl opacity-20"
        />
      </section>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            src="/images/hospital-building.png"
            alt="MHC Building"
            className="rounded-3xl shadow-2xl border border-white/40 object-cover"
          />
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-blue-900 leading-tight">
              A Legacy of Care. A Future of Innovation.
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Founded with the belief that healthcare should blend technology
              and humanity, MHC Hospital stands as a sanctuary of healing where
              compassion meets clinical excellence.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From multi-speciality treatments to advanced AI-powered diagnostics,
              our institution continues to pioneer holistic well-being for every
              patient we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="p-10 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition"
        >
          <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To provide equitable, innovative, and compassionate healthcare
            through world-class expertise, cutting-edge infrastructure, and a
            human-first approach that treats every patient like family.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-10 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition"
        >
          <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To emerge as a global beacon of healthcare excellence, where
            innovation and integrity redefine patient experience and
            sustainability in medical care.
          </p>
        </motion.div>
      </section>

      {/* Achievements / Milestones */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
          Our Milestones
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-3xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg p-10 hover:shadow-2xl transition"
            >
              <h4 className="text-5xl font-extrabold text-blue-700 mb-2">
                <Counter end={s.number} />
              </h4>
              <p className="text-gray-700 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-emerald-500 to-blue-600">
          Leadership Team
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((lead, i) => (
            <motion.div
              key={lead.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 25px 50px rgba(0, 128, 255, 0.25), 0 0 30px rgba(16, 185, 129, 0.35)",
              }}
              className="relative bg-white/90 backdrop-blur-2xl rounded-3xl border border-gray-200 shadow-xl p-8 text-center transition-all"
            >
              <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-400 shadow-md">
                <img
                  src={lead.img}
                  alt={lead.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-2xl font-bold text-blue-900">{lead.name}</h4>
              <p className="text-emerald-600 text-sm font-semibold mb-3">
                {lead.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {lead.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-center text-white bg-gradient-to-r from-blue-900 via-emerald-700 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Experience Care That Heals Beyond Medicine
          </h3>
          <p className="text-blue-100 mb-8 leading-relaxed">
            MHC Hospital isn’t just a facility - it’s a family that heals with
            heart, guided by science, and powered by innovation.
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
