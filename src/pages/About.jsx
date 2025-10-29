import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { id: 1, number: 15000, label: "Patients Treated" },
    { id: 2, number: 120, label: "Expert Doctors" },
    { id: 3, number: 25, label: "Years of Experience" },
    { id: 4, number: 50, label: "Specialities" },
  ];

  const team = [
    { id: 1, name: "Dr. Murugan", role: "Cardiologist" },
    { id: 2, name: "Dr. Anjali", role: "Neurologist" },
    { id: 3, name: "Dr. Ravi", role: "Orthopedic Surgeon" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-green-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            About MHC Hospital
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
            Delivering world-class healthcare with compassion, trust, and innovation for over 25 years.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To provide compassionate, high-quality healthcare using the latest technology and a patient-first approach, ensuring the well-being and comfort of every patient.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To be recognized as a leading healthcare provider, known for excellence, innovation, and a patient-centered culture.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Our Achievements
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: stat.id * 0.2 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h4 className="text-4xl font-extrabold text-blue-700 mb-2">
                {stat.number.toLocaleString()}
              </h4>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center">
          Meet Our Experts
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-gray-100 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-blue-200 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-blue-900">
                {doc.name.split(" ")[1][0]}
              </div>
              <h4 className="text-xl font-bold text-blue-900">{doc.name}</h4>
              <p className="text-gray-700">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
