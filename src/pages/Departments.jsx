import React from "react";
import { motion } from "framer-motion";

const departments = [
  { id: 1, title: "Anesthesiology", image: "/images/departments/anesthesia.png", desc: "Safe and advanced anesthesia services for all surgeries." },
  { id: 2, title: "Cardiology", image: "/images/departments/cardiology.png", desc: "Comprehensive cardiac care with advanced cath lab." },
  { id: 3, title: "Dentistry", image: "/images/departments/dentistry.png", desc: "Complete dental, cosmetic & oral health services." },
  { id: 4, title: "Dermatology", image: "/images/departments/dermatology.png", desc: "Skin, hair, laser treatments & cosmetic dermatology." },
  { id: 5, title: "ENT (Ear, Nose & Throat)", image: "/images/departments/ent.png", desc: "Advanced ENT screening, surgery & hearing solutions." },
  { id: 6, title: "Gynaecology & Obstetrics", image: "/images/departments/gynaecology.png", desc: "Pregnancy care, fertility, women’s health & delivery services." },
  { id: 7, title: "General Medicine", image: "/images/departments/generalmedicine.png", desc: "Primary treatment for medical conditions & chronic care." },
  { id: 8, title: "Gastroenterology", image: "/images/departments/gastroenterology.png", desc: "Liver, pancreas & digestive system treatment with expert endoscopy care." },
  { id: 9, title: "Neurology", image: "/images/departments/neurology.png", desc: "Brain, spine, stroke management & neurological therapy." },
  { id: 10, title: "Nephrology", image: "/images/departments/nephrology.png", desc: "Kidney care, dialysis & renal disease management." },
  { id: 11, title: "Orthopaedics", image: "/images/departments/orthopedics.png", desc: "Joint replacements, trauma care & sports injury treatment." },
  { id: 12, title: "Oncology", image: "/images/departments/oncology.png", desc: "Cancer treatment, chemotherapy & ongoing monitoring." },
  { id: 13, title: "Psychiatry", image: "/images/departments/psychiatry.png", desc: "Mental health, counselling & emotional wellness." },
  { id: 14, title: "Pulmonology", image: "/images/departments/pulmonology.png", desc: "Asthma, COPD, lung infections & respiratory support." },
  { id: 15, title: "Pathology", image: "/images/departments/pathology.png", desc: "Accurate diagnostics with advanced lab technologies." },
  { id: 16, title: "Paediatrics", image: "/images/departments/pediatrics.png", desc: "Complete health & vaccination for infants and children." },
  { id: 17, title: "Plastic Surgery", image: "/images/departments/plasticsurgery.png", desc: "Cosmetic, reconstructive & trauma corrective surgery." },
  { id: 18, title: "Radiology", image: "/images/departments/radiology.png", desc: "Digital X-ray, ultrasound, scans & quality imaging." },
  { id: 19, title: "Urology", image: "/images/departments/urology.png", desc: "Urinary tract, kidney stone & male reproductive care." },
];

export default function Departments() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-cyan-700 mb-14"
        >
          Our Specialities
        </motion.h2>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {departments.map((d) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="backdrop-blur-md bg-white/70 border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-lg font-semibold text-blue-800">{d.title}</h4>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
