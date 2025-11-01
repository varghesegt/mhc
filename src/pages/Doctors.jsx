import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Star,
  ImageOff,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

/* =======================================================================
 ✅ SmartImage — Clean, Responsive
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
        <div className="absolute inset-0 bg-gray-200/70 animate-pulse rounded-3xl" />
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
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-3xl">
          <ImageOff className="w-10 h-10 text-gray-400" />
        </div>
      )}
    </div>
  );
}

/* =======================================================================
 ✅ Doctor Data
======================================================================= */
const departments = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "General Medicine",
  "Dermatology",
  "ENT",
  "Gastroenterology",
];

const WHATSAPP_NUMBER = "919092357100";

const doctors = Array.from({ length: 9 }, (_, i) => ({
  id: `doctor${i + 1}`,
  name: `Dr. Specialist ${i + 1}`,
  dept: departments[i % departments.length],
  exp: `${10 + i} yrs Experience`,
  image: `/images/doctor${i + 1}.jpg`,
  rating: 4 + (i % 2),
  phone: `+9190000000${i.toString().padStart(2, "0")}`,
  whatsapp: WHATSAPP_NUMBER,
}));

/* =======================================================================
 ✅ Main Component
======================================================================= */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});
  const [readyMsg, setReadyMsg] = useState({});

  const filteredDoctors = useMemo(() => {
    const s = search.toLowerCase();
    return doctors.filter((doc) => doc.name.toLowerCase().includes(s));
  }, [search]);

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
  ];

  /* 🧠 Smart Greeting Based on Local Time */
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  /* 🧾 Generate WhatsApp Message */
  const createWhatsAppMessage = (d, patientName) => {
    const date = selectedDate[d.id];
    const time = selectedTime[d.id];
    if (!date || !time || !patientName.trim()) return null;

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

  /* 🔁 Auto-preview message (without name) */
  useEffect(() => {
    filteredDoctors.forEach((d) => {
      if (selectedDate[d.id] && selectedTime[d.id]) {
        const msg =
          "👤 Patient name will be added before sending.\n\n" +
          createWhatsAppMessage(d, "__________");
        setReadyMsg((prev) => ({ ...prev, [d.id]: msg }));
      }
    });
  }, [selectedDate, selectedTime]);

  /* ✅ WhatsApp Handler */
  const handleWhatsApp = (d) => {
    const date = selectedDate[d.id];
    const time = selectedTime[d.id];
    if (!date || !time)
      return alert("Please select date and time first.");

    const patientName = prompt("Please enter the patient's full name:");
    if (!patientName || !patientName.trim()) {
      alert("Patient name is required before booking.");
      return;
    }

    const message = createWhatsAppMessage(d, patientName);
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${d.whatsapp}?text=${encodedMsg}`;
    window.open(whatsappURL, "_blank");
  };

  /* ✅ Call Handler */
  const handleCall = (d) => window.open(`tel:${d.phone}`, "_self");

  /* =======================================================================
   ✅ UI Rendering
  ======================================================================== */
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col gap-5 mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          Premium Appointment Booking
        </h2>

        <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow border w-full sm:w-80">
          <Search size={18} className="text-blue-600 mr-2" />
          <input
            type="text"
            placeholder="Search doctor..."
            className="bg-transparent outline-none text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDoctors.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl shadow-lg border bg-gradient-to-br from-white via-blue-50/40 to-green-50/30 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <SmartImage src={d.image} alt={d.name} />

            <div className="p-5 flex flex-col gap-3">
              {/* Doctor Info */}
              <div>
                <h3 className="text-xl font-bold text-blue-900">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.dept}</p>

                <div className="flex items-center mt-2">
                  {[...Array(d.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs ml-2 text-gray-500">{d.rating}.0</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">{d.exp}</p>
              </div>

              {/* Appointment Selection */}
              <div className="mt-2 space-y-3">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" />
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDate[d.id] || ""}
                    onChange={(e) =>
                      setSelectedDate((prev) => ({ ...prev, [d.id]: e.target.value }))
                    }
                  />
                </div>

                {/* Time */}
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() =>
                        setSelectedTime((prev) => ({ ...prev, [d.id]: slot }))
                      }
                      className={`px-3 py-1.5 rounded-full text-xs border transition-all
                        ${
                          selectedTime[d.id] === slot
                            ? "bg-green-600 text-white border-green-600 shadow-md"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      <Clock size={12} className="inline mr-1" />
                      {slot}
                    </button>
                  ))}
                </div>

                {/* Message Preview */}
                {readyMsg[d.id] && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-gray-700 whitespace-pre-line shadow-inner"
                  >
                    <p className="font-semibold text-green-700 mb-1 flex items-center gap-1">
                      <MessageSquare size={12} />
                      Message Preview
                    </p>
                    <p>{readyMsg[d.id]}</p>
                  </motion.div>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-3">
                  <button
                    onClick={() => handleWhatsApp(d)}
                    disabled={!selectedDate[d.id] || !selectedTime[d.id]}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
                      selectedDate[d.id] && selectedTime[d.id]
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    <Send size={14} />
                    Send via WhatsApp
                  </button>

                  <button
                    onClick={() => handleCall(d)}
                    className="flex items-center justify-center gap-2 rounded-lg py-2 bg-emerald-500 
                      text-white text-xs font-semibold hover:bg-emerald-600 transition"
                  >
                    <Phone size={14} />
                    Call Doctor
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Result */}
      {filteredDoctors.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No doctors found matching your search.
        </p>
      )}
    </section>
  );
}
