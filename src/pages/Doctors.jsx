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

/* -------------------------------------------
   IMAGE COMPONENT (LOADER + ERROR FALLBACK)
-------------------------------------------- */
function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl group"
      style={{ aspectRatio: "4/5" }}
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
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 
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

/* -------------------------------------------
   WHATSAPP NUMBER (NO PLUS SIGN)
-------------------------------------------- */
const WHATSAPP_NUMBER = "918098096555";

/* -------------------------------------------
   DOCTORS LIST
-------------------------------------------- */
const doctors = [
  { id: "1", name: "Dr. Vignesh Kesavan", dept: "Dermatology, Venereology & Leprosy (DVL)" },
  { id: "2", name: "Dr. Keerthika Jayaraman", dept: "Radiation Therapy" },
  { id: "3", name: "Dr. Arun Gandhi", dept: "Orthopedics" },
  { id: "4", name: "Dr. Indirapriyadharsini", dept: "Anesthesiology" },
  { id: "5", name: "Dr. Jerome D’Souza A", dept: "General Surgery" },
  { id: "6", name: "Dr. Sakthivel P", dept: "Anatomy (BDS, MSc Anat.)" },
  { id: "7", name: "Dr. Rajeswari S", dept: "Dental Surgery (BDS, D.Pharm)" },
  { id: "8", name: "Dr. Sai Vidyasagar S", dept: "Oral & Maxillofacial Surgery (MDS)" },
  { id: "9", name: "Dr. Manjula P", dept: "General Surgery" },
  { id: "10", name: "Dr. Saravanan R P", dept: "General Medicine" },
  { id: "11", name: "Dr. Raji Lakshmanan", dept: "Obstetrics & Gynecology" },
  { id: "12", name: "Dr. Kannan D", dept: "Plastic & Reconstructive Surgery" },
  { id: "13", name: "Dr. Anand Babu", dept: "Pulmonology" },
  { id: "14", name: "Dr. Ajit Kumar N", dept: "Spine Surgery" },
  { id: "15", name: "Dr. Amuthan K R", dept: "Otorhinolaryngology (ENT)" },
  { id: "16", name: "Dr. Malathi Sriram", dept: "Obstetrics & Gynecology (DGO)" },
  { id: "17", name: "Dr. Vignesh V", dept: "Dentistry" },
  { id: "18", name: "Dr. Sakthivadivan P", dept: "General Surgery" },
  { id: "19", name: "Dr. Vijay Pradap", dept: "Otorhinolaryngology (ENT)" },
  { id: "20", name: "Dr. Aruleeswaran Thangarasu", dept: "Otorhinolaryngology (ENT)" },
  { id: "21", name: "Dr. Satheesh Govindan", dept: "Anesthesiology" },
].map((d, i) => ({
  ...d,
  image: `/images/doctor${i + 1}.jpg`,
  phone: "+918098096555",
  whatsapp: WHATSAPP_NUMBER,
}));

/* -------------------------------------------
   TIME + UTILS
-------------------------------------------- */
const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
];

const todayISO = () => new Date().toISOString().slice(0, 10);

const maxDateISO = () => {
  const d = new Date();
  d.setMonth(d.getMonth() + 2);
  return d.toISOString().slice(0, 10);
};

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
};

/* -------------------------------------------
   NAME ENTRY MODAL
-------------------------------------------- */
function NameModal({ open, onClose, onConfirm, doctor, date, time }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      setName("");
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            <button
              className="absolute top-3 right-3"
              onClick={onClose}
            >
              <X className="text-slate-500" />
            </button>

            <h3 className="text-xl font-bold">Confirm Appointment</h3>
            <p className="text-sm text-gray-600 mt-1">
              {doctor?.name} — {doctor?.dept}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {date} at {time}
            </p>

            <label className="block text-sm mt-4">Patient Full Name</label>
            <input
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mt-1"
              placeholder="Enter full name"
            />

            <div className="flex gap-3 mt-6">
              <button
                onClick={onClose}
                className="w-1/2 border rounded-md py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirm(name.trim())}
                className="w-1/2 bg-emerald-600 text-white rounded-md py-2"
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

/* -------------------------------------------
   MAIN PAGE
-------------------------------------------- */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});
  const [previewMsg, setPreviewMsg] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState(null);
  const [modalDate, setModalDate] = useState("");
  const [modalTime, setModalTime] = useState("");

  /* Search Logic */
  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    return doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(s) ||
        d.dept.toLowerCase().includes(s)
    );
  }, [search]);

  /* Build preview message */
  useEffect(() => {
    filtered.forEach((d) => {
      if (selectedDate[d.id] && selectedTime[d.id]) {
        const formatted = new Date(selectedDate[d.id]).toLocaleDateString("en-GB");
        const greeting = getGreeting();
        const preview =
          `💬 Preview Message\n\n` +
          `💚 *${greeting} ${d.name}!* \n\n` +
          `I’d like to request an *appointment booking*. \n\n` +
          `━━━━━━━━━━━━━━━━━━━\n` +
          `👨‍⚕️ Doctor: ${d.name}\n` +
          `🏥 Department: ${d.dept}\n` +
          `📅 Date: ${formatted}\n` +
          `⏰ Time: ${selectedTime[d.id]}\n` +
          `━━━━━━━━━━━━━━━━━━━\n\n` +
          `👤 Patient Name: __________`;

        setPreviewMsg((p) => ({ ...p, [d.id]: preview }));
      }
    });
  }, [selectedDate, selectedTime, filtered.length]);

  /* Open modal */
  const openModal = (d) => {
    if (!selectedDate[d.id] || !selectedTime[d.id])
      return alert("Please select both date and time first.");

    setModalDoctor(d);
    setModalDate(selectedDate[d.id]);
    setModalTime(selectedTime[d.id]);
    setModalOpen(true);
  };

  /* Send message */
  const handleConfirm = (name) => {
    if (!name) return;

    const d = modalDoctor;
    const formatted = new Date(modalDate).toLocaleDateString("en-GB");
    const greeting = getGreeting();

    const msg =
      `💚 *${greeting} ${d.name}!* \n\n` +
      `I’d like to request an *appointment booking*.\n\n` +
      `━━━━━━━━━━━━━━\n` +
      `👨‍⚕️ Doctor: ${d.name}\n` +
      `🏥 Department: ${d.dept}\n` +
      `📅 Date: ${formatted}\n` +
      `⏰ Time: ${modalTime}\n` +
      `━━━━━━━━━━━━━━\n\n` +
      `👤 Patient Name: ${name}`;

    window.open(
      `https://wa.me/${d.whatsapp}/?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setModalOpen(false);
  };

  /* UI */
  return (
    <section className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center mb-2">Meet Our Specialists</h2>
        <p className="text-slate-600 text-center mb-8">
          Search your doctor, select date & time, and book instantly via WhatsApp.
        </p>

        {/* Search Box */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-white px-4 py-3 rounded-2xl shadow border w-full sm:w-96">
            <Search size={18} className="text-emerald-600 mr-2" />
            <input
              placeholder="Search doctor or department..."
              className="bg-transparent outline-none text-sm w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((d) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border shadow bg-white overflow-hidden"
            >
              <SmartImage src={d.image} alt={d.name} />

              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-emerald-700">{d.dept}</p>

                {/* Date */}
                <div className="flex gap-2 items-center">
                  <Calendar size={16} className="text-emerald-600" />
                  <input
                    type="date"
                    className="border rounded px-3 py-2 text-sm w-full"
                    min={todayISO()}
                    max={maxDateISO()}
                    value={selectedDate[d.id] || ""}
                    onChange={(e) =>
                      setSelectedDate((p) => ({ ...p, [d.id]: e.target.value }))
                    }
                  />
                </div>

                {/* Time */}
                <div className="flex gap-2 overflow-x-auto">
                  <Clock size={16} className="text-emerald-600" />
                  <div className="flex gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() =>
                          setSelectedTime((p) => ({ ...p, [d.id]: slot }))
                        }
                        className={`px-3 py-1 rounded-full text-xs border ${
                          selectedTime[d.id] === slot
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "border-slate-300 text-slate-700"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                {previewMsg[d.id] && (
                  <div className="bg-emerald-50 border p-3 rounded text-xs whitespace-pre-line">
                    <p className="font-semibold mb-1 flex items-center gap-1">
                      <MessageSquare size={12} /> Message Preview
                    </p>
                    {previewMsg[d.id]}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-3">
                  <button
                    onClick={() => openModal(d)}
                    disabled={!selectedDate[d.id] || !selectedTime[d.id]}
                    className={`w-full py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 ${
                      selectedDate[d.id] && selectedTime[d.id]
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    <Send size={14} /> Send via WhatsApp
                  </button>

                  <a
                    href={`tel:${d.phone}`}
                    className="w-full py-2 rounded-full text-sm font-semibold border border-emerald-400 text-emerald-600 flex items-center justify-center gap-2"
                  >
                    <Phone size={14} /> Call Doctor
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <NameModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        doctor={modalDoctor}
        date={modalDate}
        time={modalTime}
      />
    </section>
  );
}
