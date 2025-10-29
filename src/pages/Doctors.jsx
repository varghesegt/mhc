import React, {
  useState,
  useMemo,
  useState as useReactState,
} from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Star,
  ImageOff,
  Phone,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

/* =======================================================================
 ✅ Adaptive SmartImage
======================================================================= */
function SmartImage({ src, alt }) {
  const [loaded, setLoaded] = useReactState(false);
  const [error, setError] = useReactState(false);

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

      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100
        backdrop-blur-sm transition-all duration-300 rounded-3xl"></div>
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

const doctors = Array.from({ length: 21 }, (_, i) => ({
  id: `doctor${i + 1}`,
  name: `Dr. Specialist ${i + 1}`,
  dept: departments[i % departments.length],
  exp: `${10 + i} yrs Experience`,
  image: `/images/doctor${i + 1}.jpg`,
  rating: 4 + (i % 2),
  available: i % 3 !== 0,
}));

/* =======================================================================
 ✅ Main Page Component
======================================================================= */
export default function Doctors() {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const s = search.toLowerCase();
      return (
        doc.name.toLowerCase().includes(s) &&
        (filterDept === "All" || doc.dept === filterDept)
      );
    });
  }, [search, filterDept]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col gap-5 mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          Find Your Doctor
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {/* Search */}
          <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow border w-full sm:w-72">
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
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDoctors.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-white rounded-3xl shadow-lg border 
            transition-all hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <SmartImage src={d.image} alt={d.name} />

            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900">{d.name}</h3>
              <p className="text-sm text-gray-600">{d.dept}</p>

              <div className="flex items-center mt-2">
                {[...Array(d.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-xs ml-2 text-gray-500">{d.rating}.0</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">{d.exp}</p>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/doctors/${d.id}`}
                  className="flex-1 rounded-lg py-2 bg-blue-600 text-center text-white 
                  text-xs font-semibold hover:bg-blue-700 transition"
                >
                  View Profile
                </Link>
                <Link
                  to={`/appointment?doctor=${d.id}`}
                  className={`flex-1 rounded-lg py-2 text-center text-xs font-semibold transition ${
                    d.available
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                >
                  Book
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No result */}
      {filteredDoctors.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No doctors found matching your search.
        </p>
      )}
    </section>
  );
}
