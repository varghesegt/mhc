/********************************************************************************************
 * HOSPITAL FLAGSHIP EDITION — ULTRA PREMIUM DOCTORS PAGE (2025)
 * Apple-Level UI • Compact Medical Cards • Glassmorphism • Animated Gradient Background
 ********************************************************************************************/

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  ImageOff,
  Phone,
  Calendar,
  Clock,
  Send,
  X,
  GraduationCap,
  Stethoscope,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================================================
   SMART IMAGE — Premium Shadow + Smooth Loader
========================================================================================= */
function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_0_40px_rgba(0,0,0,0.05)]"
      style={{ aspectRatio: "4/5" }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100/40 animate-pulse rounded-2xl" />
      )}

      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ease-out
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}
            group-hover:scale-105`}
        />
      ) : (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center rounded-2xl">
          <ImageOff className="w-10 h-10 text-slate-400" />
        </div>
      )}
    </div>
  );
}

/* =========================================================================================
   WHATSAPP
========================================================================================= */
const WHATSAPP = "918098096555";

/* =========================================================================================
   DOCTOR DATA
========================================================================================= */
const DOCTORS = [
  { name: "Dr. Ajit Kumar N", degree: "DNB Ortho, FISS (Spine)", dept: "Orthopaedics – Spine Surgery" },
  { name: "Dr. Amuthan K R", degree: "MS (ENT)", dept: "ENT – Otorhinolaryngology" },
  { name: "Dr. Anand Babu", degree: "DNB, IDCCM, EDIC", dept: "Pulmonology" },
  { name: "Dr. Aruleeshwaran Thangarasu", degree: "DLO", dept: "ENT – Otorhinolaryngology" },
  { name: "Dr. Arun Gandhi", degree: "MS Ortho", dept: "Orthopaedics" },
  { name: "Dr. Indirapriyadharsini", degree: "DNB (Anaesthesia), PAED Anaesthesia", dept: "Anaesthesiology & Emergency" },
  { name: "Dr. Jerome D’Souza A", degree: "MS, DrNB(SGE), FIAGES", dept: "Gastroenterology – HPB & Cancer Surgery" },
  { name: "Dr. Kannan D", degree: "MS, MCh (Plastic)", dept: "Plastic & Reconstructive Surgery" },
  { name: "Dr. Keerthika Jayaraman", degree: "MD RT", dept: "Oncology – Radiotherapy" },
  { name: "Dr. Kishwanth R", degree: "MD, DM", dept: "Gastroenterology & Hepatology" },
  { name: "Dr. Lavanya R", degree: "MD", dept: "Pathology" },
  { name: "Dr. Malathi Sriram", degree: "DGO", dept: "Obstetrics & Gynecology" },
  { name: "Dr. Manjula P", degree: "MS (General Surgery)", dept: "General Surgery" },
  { name: "Dr. Rajeswari S", degree: "BDS", dept: "Dentistry" },
  { name: "Dr. Raji Lakshmanan", degree: "MS", dept: "Obstetrics & Gynecology" },
  { name: "Dr. Sai Vidyasagar S", degree: "MDS", dept: "Oral & Maxillofacial Surgery" },
  { name: "Dr. Sakthivadivan P", degree: "MS, FIAGES, FALS", dept: "General & Laparoscopic Surgery" },
  { name: "Dr. Sakthivel P", degree: "BDS, MSc Anat", dept: "Dentistry" },
  { name: "Dr. Saravanan R P", degree: "MD, F.Echo", dept: "General Medicine" },
  { name: "Dr. Sathish", degree: "Dip (Anes)", dept: "Anaesthesiology & Emergency" },
  { name: "Dr. Sheik Abdulla", degree: "", dept: "Nephrology" },
  { name: "Dr. Sivagurunathan", degree: "", dept: "Pediatrics" },
  { name: "Dr. Sundaravelu M", degree: "DLO", dept: "ENT – Otorhinolaryngology" },
  { name: "Dr. Sunitha M", degree: "DPM, DNB", dept: "Psychiatry" },
  { name: "Dr. Suresh Bhalaji", degree: "DNB, MS, MCh", dept: "Urology" },
  { name: "Dr. Vignesh Kesavan", degree: "MD DVL", dept: "Dermatology & Cosmetology" },
  { name: "Dr. Vignesh V", degree: "DNB, IDCCM, FNB, EDIC, MRCP", dept: "Anaesthesiology & Emergency" },
  { name: "Dr. Vijay Pradap", degree: "MS (ENT)", dept: "ENT – Otorhinolaryngology" },
  { name: "Dr. Vinoth Rayar", degree: "MDRD", dept: "Radiology" },
  { name: "Dr. Visalatchi", degree: "MBBS, MD", dept: "Psychiatry" },
].map((d, i) => ({
  id: i + 1,
  ...d,
  phone: "+918098096555",
  whatsapp: WHATSAPP,
  image: `/images/doctor${i + 1}.jpg`,
}));

/* =========================================================================================
   HELPERS
========================================================================================= */
const todayISO = () => new Date().toISOString().slice(0, 10);

const maxDateISO = () => {
  const d = new Date();
  d.setMonth(d.getMonth() + 2);
  return d.toISOString().slice(0, 10);
};

const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "03:00 PM", "05:00 PM"];

const greeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good Morning";
  if (h < 17) return "Good Afternoon";
  return "Good Evening";
};

/* =========================================================================================
   NAME MODAL — Apple Modal Card
========================================================================================= */
function NameModal({ open, onClose, onConfirm, doctor, date, time }) {
  const [name, setName] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (open) setTimeout(() => ref.current?.focus(), 120);
    else setName("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-xl p-7 rounded-3xl border border-white/40 shadow-[0_0_80px_rgba(0,0,0,0.2)] max-w-md w-full relative"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button className="absolute top-4 right-4" onClick={onClose}>
              <X className="text-slate-500 w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-slate-900">Confirm Appointment</h2>
            <p className="text-sm text-slate-600 mt-1">{doctor?.name}</p>
            <p className="text-xs text-slate-400">{doctor?.dept}</p>

            <p className="mt-4 text-xs text-slate-500">{date} • {time}</p>

            <label className="text-sm font-semibold mt-4 block">Patient Name</label>
            <input
              ref={ref}
              className="w-full mt-1 px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              value={name}
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
            />

            <button
              onClick={() => onConfirm(name)}
              className="w-full mt-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 rounded-xl font-semibold shadow hover:shadow-lg"
            >
              Send WhatsApp Message
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================================================
   MAIN PAGE — ULTRA PREMIUM WITH COMPACT CARDS
========================================================================================= */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});
  const [modal, setModal] = useState({ open: false });

  /* SEARCH FILTER */
  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    return DOCTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(s) ||
        d.degree.toLowerCase().includes(s) ||
        d.dept.toLowerCase().includes(s)
    );
  }, [search]);

  /* SEND CONFIRMATION */
  const handleConfirm = (name) => {
    if (!name) return;

    const d = modal.doctor;
    const msg =
      `💚 *${greeting()}, Doctor ${d.name}*\n\n` +
      `I would like to book an appointment.\n\n` +
      `👨‍⚕️ Doctor: ${d.name}\n` +
      `🎓 Qualification: ${d.degree}\n` +
      `🏥 Department: ${d.dept}\n` +
      `📅 Date: ${modal.date}\n` +
      `⏰ Time: ${modal.time}\n\n` +
      `👤 Patient Name: *${name}*`;

    window.open(
      `https://api.whatsapp.com/send?phone=${d.whatsapp}&text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setModal({ open: false });
  };

  /* =========================================================================================
     RENDER UI
  ========================================================================================= */
  return (
    <section className="min-h-screen py-20 px-5 relative">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[150px]" />
      </div>

      {/* HEADER */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center text-5xl font-extrabold text-slate-900"
      >
        Our Specialist Doctors
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center text-slate-600 mt-3"
      >
        Book your appointment instantly with our expert medical specialists.
      </motion.p>

      {/* SEARCH */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mt-10"
      >
        <div className="flex items-center bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-lg border w-full max-w-xl">
          <Search className="text-emerald-600 mr-3" />
          <input
            placeholder="Search doctors, degrees or departments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </motion.div>

      {/* GRID — COMPACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {filtered.map((d, index) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/80 backdrop-blur-xl border shadow-md hover:shadow-xl transition-all p-4 flex flex-col"
          >
            <SmartImage src={d.image} alt={d.name} />

            <div className="mt-4 flex flex-col gap-2 flex-1">

              <h3 className="text-lg font-bold text-slate-900 leading-tight">{d.name}</h3>

              <p className="text-xs text-emerald-700 flex items-center gap-1">
                <GraduationCap size={13} /> {d.degree}
              </p>

              <p className="text-xs text-slate-600 flex items-center gap-1">
                <Stethoscope size={13} /> {d.dept}
              </p>

              {/* DATE */}
              <div className="flex items-center gap-2 mt-1">
                <Calendar size={15} className="text-emerald-600" />
                <input
                  type="date"
                  min={todayISO()}
                  max={maxDateISO()}
                  value={selectedDate[d.id] || ""}
                  onChange={(e) =>
                    setSelectedDate((p) => ({ ...p, [d.id]: e.target.value }))
                  }
                  className="border border-slate-300 rounded-lg px-2 py-1.5 text-xs w-full outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* TIME */}
              <div className="flex items-center gap-2 flex-wrap mt-1">
                <Clock size={15} className="text-emerald-600" />
                <div className="flex gap-1.5 flex-wrap">
                  {timeSlots.map((slot) => {
                    const active = selectedTime[d.id] === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() =>
                          setSelectedTime((p) => ({ ...p, [d.id]: slot }))
                        }
                        className={`px-2.5 py-1 rounded-full text-[10px] border transition-all ${
                          active
                            ? "bg-emerald-600 text-white border-emerald-600 shadow"
                            : "border-slate-300 text-slate-700 bg-white hover:bg-slate-100"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-3 flex flex-col gap-1.5">

                <button
                  onClick={() =>
                    setModal({
                      open: true,
                      doctor: d,
                      date: selectedDate[d.id],
                      time: selectedTime[d.id],
                    })
                  }
                  disabled={!selectedDate[d.id] || !selectedTime[d.id]}
                  className={`w-full py-2 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all ${
                    selectedDate[d.id] && selectedTime[d.id]
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow hover:shadow-lg"
                      : "bg-slate-200 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <Send size={13} /> Book WhatsApp
                </button>

                <a
                  href={`tel:${d.phone}`}
                  className="w-full py-2 rounded-lg border border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 flex items-center justify-center gap-2 text-xs"
                >
                  <Phone size={13} /> Call Doctor
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <NameModal
        open={modal.open}
        doctor={modal.doctor}
        date={modal.date}
        time={modal.time}
        onClose={() => setModal({ open: false })}
        onConfirm={handleConfirm}
      />
    </section>
  );
}
