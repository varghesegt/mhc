import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaHome,
  FaInfoCircle,
  FaUserMd,
  FaHospitalSymbol,
  FaPhoneAlt,
  FaCalendarCheck,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

 const searchableData = [
    /* ================= Cardiology ================= */
    { type: "Disease", name: "Cardiac Arrest", link: "/doctors/john-smith" },
    { type: "Disease", name: "Heart Attack", link: "/doctors/john-smith" },
    { type: "Disease", name: "Arrhythmia", link: "/doctors/john-smith" },
    { type: "Organ", name: "Heart", link: "/doctors/john-smith" },
    { type: "Department", name: "Cardiology", link: "/doctors/john-smith" },
    { type: "Doctor", name: "Dr. John Smith (Cardiologist)", link: "/doctors/john-smith" },

    /* ================= Neurology ================= */
    { type: "Disease", name: "Stroke", link: "/doctors/anita-reddy" },
    { type: "Disease", name: "Epilepsy", link: "/doctors/anita-reddy" },
    { type: "Disease", name: "Migraine", link: "/doctors/anita-reddy" },
    { type: "Organ", name: "Brain", link: "/doctors/anita-reddy" },
    { type: "Department", name: "Neurology", link: "/doctors/anita-reddy" },
    { type: "Doctor", name: "Dr. Anita Reddy (Neurologist)", link: "/doctors/anita-reddy" },

    /* ================= Pulmonology ================= */
    { type: "Disease", name: "Asthma", link: "/doctors/rahul-mehta" },
    { type: "Disease", name: "COPD", link: "/doctors/rahul-mehta" },
    { type: "Disease", name: "Pneumonia", link: "/doctors/rahul-mehta" },
    { type: "Organ", name: "Lungs", link: "/doctors/rahul-mehta" },
    { type: "Department", name: "Pulmonology", link: "/doctors/rahul-mehta" },
    { type: "Doctor", name: "Dr. Rahul Mehta (Pulmonologist)", link: "/doctors/rahul-mehta" },

    /* ================= Endocrinology ================= */
    { type: "Disease", name: "Diabetes", link: "/doctors/priya-patel" },
    { type: "Disease", name: "Thyroid Disorder", link: "/doctors/priya-patel" },
    { type: "Disease", name: "Hormonal Imbalance", link: "/doctors/priya-patel" },
    { type: "Organ", name: "Pancreas", link: "/doctors/priya-patel" },
    { type: "Department", name: "Endocrinology", link: "/doctors/priya-patel" },
    { type: "Doctor", name: "Dr. Priya Patel (Endocrinologist)", link: "/doctors/priya-patel" },

    /* ================= Orthopedics ================= */
    { type: "Disease", name: "Arthritis", link: "/doctors/amit-kapoor" },
    { type: "Disease", name: "Fracture", link: "/doctors/amit-kapoor" },
    { type: "Disease", name: "Osteoporosis", link: "/doctors/amit-kapoor" },
    { type: "Organ", name: "Bones", link: "/doctors/amit-kapoor" },
    { type: "Department", name: "Orthopedics", link: "/doctors/amit-kapoor" },
    { type: "Doctor", name: "Dr. Amit Kapoor (Orthopedic Surgeon)", link: "/doctors/amit-kapoor" },

    /* ================= Oncology ================= */
    { type: "Disease", name: "Cancer", link: "/doctors/neha-sharma" },
    { type: "Disease", name: "Leukemia", link: "/doctors/neha-sharma" },
    { type: "Disease", name: "Breast Cancer", link: "/doctors/neha-sharma" },
    { type: "Organ", name: "Tumor", link: "/doctors/neha-sharma" },
    { type: "Department", name: "Oncology", link: "/doctors/neha-sharma" },
    { type: "Doctor", name: "Dr. Neha Sharma (Oncologist)", link: "/doctors/neha-sharma" },

    /* ================= Pediatrics ================= */
    { type: "Disease", name: "Chickenpox", link: "/doctors/sameer-khan" },
    { type: "Disease", name: "Measles", link: "/doctors/sameer-khan" },
    { type: "Disease", name: "Asthma in Children", link: "/doctors/sameer-khan" },
    { type: "Organ", name: "Child Health", link: "/doctors/sameer-khan" },
    { type: "Department", name: "Pediatrics", link: "/doctors/sameer-khan" },
    { type: "Doctor", name: "Dr. Sameer Khan (Pediatrician)", link: "/doctors/sameer-khan" },

    /* ================= Ophthalmology ================= */
    { type: "Disease", name: "Cataract", link: "/doctors/rashmi-verma" },
    { type: "Disease", name: "Glaucoma", link: "/doctors/rashmi-verma" },
    { type: "Disease", name: "Conjunctivitis", link: "/doctors/rashmi-verma" },
    { type: "Organ", name: "Eye", link: "/doctors/rashmi-verma" },
    { type: "Department", name: "Ophthalmology", link: "/doctors/rashmi-verma" },
    { type: "Doctor", name: "Dr. Rashmi Verma (Eye Specialist)", link: "/doctors/rashmi-verma" },

    /* ================= ENT ================= */
    { type: "Disease", name: "Ear Infection", link: "/doctors/rohit-banerjee" },
    { type: "Disease", name: "Sinusitis", link: "/doctors/rohit-banerjee" },
    { type: "Disease", name: "Tonsillitis", link: "/doctors/rohit-banerjee" },
    { type: "Organ", name: "Ear", link: "/doctors/rohit-banerjee" },
    { type: "Organ", name: "Nose", link: "/doctors/rohit-banerjee" },
    { type: "Organ", name: "Throat", link: "/doctors/rohit-banerjee" },
    { type: "Department", name: "ENT", link: "/doctors/rohit-banerjee" },
    { type: "Doctor", name: "Dr. Rohit Banerjee (ENT Specialist)", link: "/doctors/rohit-banerjee" },

    /* ================= Dermatology ================= */
    { type: "Disease", name: "Acne", link: "/doctors/poonam-gupta" },
    { type: "Disease", name: "Eczema", link: "/doctors/poonam-gupta" },
    { type: "Disease", name: "Psoriasis", link: "/doctors/poonam-gupta" },
    { type: "Organ", name: "Skin", link: "/doctors/poonam-gupta" },
    { type: "Department", name: "Dermatology", link: "/doctors/poonam-gupta" },
    { type: "Doctor", name: "Dr. Poonam Gupta (Dermatologist)", link: "/doctors/poonam-gupta" },
  ];

  const navLinks = [
    { name: "Home", to: "/", icon: <FaHome /> },
    { name: "About", to: "/about", icon: <FaInfoCircle /> },
    { name: "Departments", to: "/departments", icon: <FaHospitalSymbol /> },
    { name: "Doctors", to: "/doctors", icon: <FaUserMd /> },
    { name: "Contact", to: "/contact", icon: <FaPhoneAlt /> },
  ];

  // Filter search results
  const filteredResults =
    query.trim() === ""
      ? []
      : searchableData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (link) => {
    setQuery("");
    setOpen(false);
    navigate(link);
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b bg-white shadow-lg"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="MHC Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-2 py-1.5 rounded-lg transition flex items-center gap-2 text-sm ${
                  isActive
                    ? "bg-green-100 text-green-900 font-semibold"
                    : "text-blue-800 hover:bg-blue-50 hover:text-green-700"
                }`
              }
            >
              {l.icon} {l.name}
            </NavLink>
          ))}

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 
                       text-white shadow hover:shadow-md hover:scale-105 transition relative overflow-hidden text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaCalendarCheck /> Book Appointment
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-br from-blue-600 to-green-500 text-white shadow"
            whileTap={{ scale: 0.9 }}
          >
            <HiMenuAlt3 size={20} />
          </motion.button>
        )}
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 left-0 w-3/4 max-w-xs h-full 
                       bg-gradient-to-b from-blue-50 via-green-50 to-green-100 
                       border-r border-green-200 shadow-2xl 
                       md:hidden z-50 rounded-r-2xl flex flex-col"
          >
            {/* Sidebar Header */}
            <div className="p-3 flex justify-between items-center border-b">
              <img src="/logo.png" alt="MHC Logo" className="h-10 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-md bg-green-100 text-green-700 hover:bg-green-200"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-3 mt-3 relative">
              <div className="flex items-center gap-2 bg-white rounded-lg shadow px-2.5 py-1.5">
                <FaSearch className="text-gray-500 text-sm" />
                <input
                  type="text"
                  placeholder="Search doctors, diseases..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>

              {/* Search Suggestions */}
              {filteredResults.length > 0 && (
                <div className="absolute top-12 left-0 right-0 bg-white border rounded-lg shadow-lg max-h-56 overflow-y-auto z-50">
                  {filteredResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item.link)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-green-100 border-b last:border-b-0 flex justify-between"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-gray-500">{item.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Nav Links */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col gap-1.5 px-4 mt-4"
            >
              {navLinks.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md flex items-center gap-2 text-base ${
                        isActive
                          ? "bg-green-200 text-green-900 font-semibold"
                          : "text-blue-800 hover:bg-green-100 hover:text-green-700"
                      }`
                    }
                  >
                    {l.icon} {l.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Appointment CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="mt-3 px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 
                             text-white text-center shadow hover:scale-105 transition flex items-center justify-center gap-2 text-sm"
                >
                  <FaCalendarCheck /> Book Appointment
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
