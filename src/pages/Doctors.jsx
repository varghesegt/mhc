// src/pages/doctors/Doctors.jsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  ImageOff,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  Send,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =======================================================================
   ✅ SmartImage — graceful load, shimmer, fallback
======================================================================= */
function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl group"
      style={{ aspectRatio: "4 / 5" }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/80 to-slate-100/60 animate-pulse rounded-3xl" />
      )}
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            group-hover:scale-110`}
        />
      ) : (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center rounded-3xl">
          <ImageOff className="w-10 h-10 text-slate-400" />
        </div>
      )}
    </div>
  );
}

/* =======================================================================
   ✅ Doctor Data (21 unique entries with their own images)
======================================================================= */
const WHATSAPP_NUMBER = "919092357100";

const doctors = [
  { id: "1",  name: "Dr. Vignesh Kesavan",          dept: "Dermatology, Venereology & Leprosy (DVL)" },
  { id: "2",  name: "Dr. Keerthika Jayaraman",      dept: "Radiation Therapy" },
  { id: "3",  name: "Dr. Kumar",              dept: "Orthopedics" },
  { id: "4",  name: "Dr. Indirapriyadharsini",      dept: "Anesthesiology" },
  { id: "5",  name: "Dr. Jerome D’Souza A",         dept: "General Surgery" },
  { id: "6",  name: "Dr. Sakthivel P",              dept: "Anatomy (BDS, MSc Anat.)" },
  { id: "7",  name: "Dr. Rajeswari S",              dept: "Dental Surgery (BDS, D.Pharm)" },
  { id: "8",  name: "Dr. Sai Vidyasagar S",         dept: "Oral & Maxillofacial Surgery (MDS)" },
  { id: "9",  name: "Dr. Manjula P",                dept: "General Surgery" },
  { id: "10", name: "Dr. Saravanan R P",            dept: "General Medicine" },
  { id: "11", name: "Dr. Raji Lakshmanan",          dept: "Obstetrics & Gynecology" },
  { id: "12", name: "Dr. Kannan D",                 dept: "Plastic & Reconstructive Surgery" },
  { id: "13", name: "Dr. Anand Babu",               dept: "Pulmonology" },
  { id: "14", name: "Dr. Ajit Kumar N",             dept: "Spine Surgery" },
  { id: "15", name: "Dr. Amuthan K R",              dept: "Otorhinolaryngology (ENT)" },
  { id: "16", name: "Dr. Malathi Sriram",           dept: "Obstetrics & Gynecology (DGO)" },
  { id: "17", name: "Dr. Vignesh V",                dept: "Dentistry" },
  { id: "18", name: "Dr. Sakthivadivan P",          dept: "General Surgery" },
  { id: "19", name: "Dr. Vijay Pradap",             dept: "Otorhinolaryngology (ENT)" },
  { id: "20", name: "Dr. Aruleeswaran Thangarasu",  dept: "Otorhinolaryngology (ENT)" },
  { id: "21", name: "Dr. Satheesh Govindan",        dept: "Anesthesiology" },
].map((d, i) => ({
  ...d,
  exp: `${8 + (i % 10)} yrs Experience`,
  image: `/images/doctor${i + 1}.jpg`, // ✅ each doctor has their own image
  phone: `+9190000000${(i + 10).toString().padStart(2, "0")}`,
  whatsapp: WHATSAPP_NUMBER,
}));

/* =======================================================================
   ✅ Utilities
======================================================================= */
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

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

/* =======================================================================
   ✅ Name Modal — for patient name input before sending
======================================================================= */
function NameModal({ open, onClose, onConfirm, doctor, date, time }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
    else setName("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10 bg-white/90 backdrop-blur-xl p-5 sm:p-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1.5 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Confirm Appointment
            </h3>
            <p className="text-sm text-slate-600 mb-1">
              {doctor?.name} — {doctor?.dept}
            </p>
            <p className="text-xs text-slate-500 mb-3">
              {date} at {time}
            </p>

            <label className="text-sm font-medium text-slate-800">
              Patient Full Name
            </label>
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex-1 rounded-lg border border-slate-300 bg-white py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirm(name.trim())}
                className="flex-1 rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =======================================================================
   ✅ Main Component
======================================================================= */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});
  const [readyMsg, setReadyMsg] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState(null);
  const [modalDate, setModalDate] = useState("");
  const [modalTime, setModalTime] = useState("");

  const filteredDoctors = useMemo(() => {
    const s = search.toLowerCase();
    return doctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(s) ||
        doc.dept.toLowerCase().includes(s)
    );
  }, [search]);

  const createWhatsAppMessage = (d, patientName) => {
    const date = selectedDate[d.id];
    const time = selectedTime[d.id];
    if (!date || !time || !patientName?.trim()) return null;

    const greeting = getGreeting();
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return (
      `💚 *${greeting} ${d.name}!* \n\n` +
      `I’d like to request an *appointment booking*.\n\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `👨‍⚕️ *Doctor:* ${d.name}\n` +
      `🏥 *Department:* ${d.dept}\n` +
      `📅 *Preferred Date:* ${formattedDate}\n` +
      `⏰ *Preferred Time:* ${time}\n` +
      `━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *Patient Name:* ${patientName.trim()}\n`
    );
  };

  useEffect(() => {
    filteredDoctors.forEach((d) => {
      if (selectedDate[d.id] && selectedTime[d.id]) {
        const date = selectedDate[d.id];
        const time = selectedTime[d.id];
        const greeting = getGreeting();
        const formattedDate = new Date(date).toLocaleDateString("en-IN", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        const preview =
          "👤 Patient name will be added before sending.\n\n" +
          `💚 *${greeting} ${d.name}!* \n\n` +
          `I’d like to request an *appointment booking*.\n\n` +
          `━━━━━━━━━━━━━━━━━━━\n` +
          `👨‍⚕️ *Doctor:* ${d.name}\n` +
          `🏥 *Department:* ${d.dept}\n` +
          `📅 *Preferred Date:* ${formattedDate}\n` +
          `⏰ *Preferred Time:* ${time}\n` +
          `━━━━━━━━━━━━━━━━━━━\n\n` +
          `👤 *Patient Name:* __________\n`;
        setReadyMsg((prev) => ({ ...prev, [d.id]: preview }));
      }
    });
  }, [selectedDate, selectedTime, filteredDoctors.length]);

  const handleOpenModal = (d) => {
    const date = selectedDate[d.id];
    const time = selectedTime[d.id];
    if (!date || !time) {
      alert("Please select date and time first.");
      return;
    }
    setModalDoctor(d);
    setModalDate(date);
    setModalTime(time);
    setModalOpen(true);
  };

  const handleConfirmName = (patientName) => {
    if (!patientName) return;
    const message = createWhatsAppMessage(modalDoctor, patientName);
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${modalDoctor.whatsapp}?text=${encoded}`;
    setModalOpen(false);
    window.open(url, "_blank");
  };

  const handleCall = (d) => window.open(`tel:${d.phone}`, "_self");

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Doctors 
        </h2>
        <p className="text-slate-600 mb-6">
          Find a specialist and book instantly via WhatsApp or call.
        </p>

        <div className="sticky top-2 z-20 mb-6">
          <div className="flex items-center bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow border w-full sm:w-96 mx-auto">
            <Search size={18} className="text-emerald-600 mr-2" />
            <input
              type="text"
              placeholder="Search by doctor or department..."
              className="bg-transparent outline-none text-sm w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.03 }}
              className="rounded-3xl border shadow-lg bg-white/80 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <SmartImage src={d.image} alt={d.name} />
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{d.name}</h3>
                  <p className="text-sm text-emerald-700 font-medium">{d.dept}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{d.exp}</p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-emerald-600 shrink-0" />
                  <input
                    type="date"
                    min={todayISO()}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-emerald-500"
                    value={selectedDate[d.id] || ""}
                    onChange={(e) =>
                      setSelectedDate((prev) => ({
                        ...prev,
                        [d.id]: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* Time */}
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-emerald-600 shrink-0" />
                  <div className="no-scrollbar flex gap-2 overflow-x-auto">
                    {timeSlots.map((slot) => {
                      const active = selectedTime[d.id] === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() =>
                            setSelectedTime((prev) => ({ ...prev, [d.id]: slot }))
                          }
                          className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs border transition-all ${
                            active
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                              : "border-slate-300 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preview */}
                {readyMsg[d.id] && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-xs text-slate-700 whitespace-pre-line shadow-inner"
                  >
                    <p className="font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                      <MessageSquare size={12} />
                      Message Preview
                    </p>
                    <p>{readyMsg[d.id]}</p>
                  </motion.div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    onClick={() => handleOpenModal(d)}
                    disabled={!selectedDate[d.id] || !selectedTime[d.id]}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full py-2 text-xs font-semibold transition-all ${
                      selectedDate[d.id] && selectedTime[d.id]
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-teal-700"
                        : "bg-slate-200 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <Send size={14} />
                    Send via WhatsApp
                  </button>

                  <a
                    href={`tel:${d.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-2 text-xs font-semibold bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-all"
                  >
                    <Phone size={14} />
                    Call Doctor
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No doctors found. Try a different name or department.
          </p>
        )}
      </div>

      {/* Modal */}
      <NameModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmName}
        doctor={modalDoctor}
        date={modalDate}
        time={modalTime}
      />
    </section>
  );
}

/* =======================================================================
   🔍 Optional Tailwind CSS helper
   Add this to your global.css:
   .no-scrollbar::-webkit-scrollbar { display: none; }
   .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
======================================================================= */
