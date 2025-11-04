import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, Send, ChevronLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const doctors = {
  murugan: {
    name: "Dr. Murugan",
    dept: "Cardiology",
    image: "/images/doctor1.jpg",
  },
  sneha: {
    name: "Dr. Sneha",
    dept: "Pediatrics",
    image: "/images/doctor2.jpg",
  },
  arun: {
    name: "Dr. Arun",
    dept: "Orthopedics",
    image: "/images/doctor3.jpg",
  },
  keerthi: {
    name: "Dr. Keerthi",
    dept: "Dermatology",
    image: "/images/doctor4.jpg",
  },
  vijay: {
    name: "Dr. Vijay",
    dept: "ENT",
    image: "/images/doctor5.jpg",
  },
};

/* =============================================================
   ✅ Utilities
============================================================= */
const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
];

const todayISO = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
};

/* =============================================================
   ✅ Confirmation Modal
============================================================= */
function ConfirmModal({ open, onClose, doctor, date, time, name, onConfirm }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 p-6 w-full max-w-md"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Confirm Appointment
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              {doctor?.name} — {doctor?.dept}
              <br />
              📅 {date} at ⏰ {time}
            </p>
            <p className="text-sm text-slate-700 mb-3">
              Confirm booking for <strong>{name}</strong>?
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 font-semibold text-sm text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 text-sm"
              >
                Confirm & Send
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =============================================================
   ✅ Main Component
============================================================= */
export default function Appointment() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const docId = params.get("doctor");
  const doctor = doctors[docId] || null;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);

  const WHATSAPP_NUMBER = "919092357100";

  // Redirect if no doctor is selected
  useEffect(() => {
    if (!doctor) {
      const timer = setTimeout(() => navigate("/doctors"), 1500);
      return () => clearTimeout(timer);
    }
  }, [doctor, navigate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const createMessage = () => {
    const greeting = getGreeting();
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return (
      `💚 *${greeting} ${doctor?.name}!* \n\n` +
      `I’d like to request an *appointment booking*.\n\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `👨‍⚕️ *Doctor:* ${doctor?.name}\n` +
      `🏥 *Department:* ${doctor?.dept}\n` +
      `📅 *Preferred Date:* ${formattedDate}\n` +
      `⏰ *Preferred Time:* ${time}\n` +
      `━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *Patient Name:* ${name}\n`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!doctor) return alert("Please select a doctor first.");
    if (!date || !time || !name.trim()) {
      alert("Please fill all fields before confirming.");
      return;
    }
    setModal(true);
  };

  const handleConfirm = () => {
    const msg = encodeURIComponent(createMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setModal(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-emerald-300/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-sky-300/30 blur-3xl rounded-full" />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl p-8 w-full max-w-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/doctors")}
            className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
          >
            <ChevronLeft size={18} /> Back to Doctors
          </button>
          <h2 className="text-3xl font-extrabold text-emerald-700">
            Book Appointment
          </h2>
        </div>

        {/* Doctor Info */}
        {doctor ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mb-8 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-100 rounded-xl p-4 shadow-inner"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full sm:w-40 h-40 object-cover rounded-xl border border-emerald-100 shadow"
            />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900">
                {doctor.name}
              </h3>
              <p className="text-sm text-slate-700">{doctor.dept}</p>
              <button
                onClick={() => navigate("/doctors")}
                className="mt-3 w-fit text-xs text-emerald-700 font-semibold flex items-center gap-1 hover:text-emerald-900 transition"
              >
                Change Doctor <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ) : (
          <p className="text-slate-600 text-center">
            Redirecting to Doctors page...
          </p>
        )}

        {/* Appointment Form */}
        {doctor && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Patient Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Preferred Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-emerald-600" />
                <input
                  type="date"
                  min={todayISO()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Preferred Time
              </label>
              <div className="flex gap-2 flex-wrap">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`px-4 py-1.5 rounded-full text-xs border transition-all ${
                      time === slot
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Clock size={12} className="inline mr-1" />
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              <Send size={14} />
              Send Booking Request via WhatsApp
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Confirmation Modal */}
      <ConfirmModal
        open={modal}
        onClose={() => setModal(false)}
        doctor={doctor}
        date={date}
        time={time}
        name={name}
        onConfirm={handleConfirm}
      />
    </section>
  );
}
