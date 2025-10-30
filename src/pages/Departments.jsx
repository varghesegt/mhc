import React from 'react'

const departments = [
  {id:1, title:'Cardiology', image:'/images/departments/cardiology.png', desc:'Comprehensive heart care with modern cath lab.'},
  {id:2, title:'Pediatrics', image:'/images/departments/pediatrics.png', desc:'Complete care for infants and children.'},
  {id:3, title:'Orthopedics', image:'/images/departments/orthopedics.png', desc:'Joint replacements, sports injuries & trauma.'},
  {id:4, title:'Neurology', image:'/images/departments/neurology.png', desc:'Brain & spine care, stroke management.'},
  {id:5, title:'Dermatology', image:'/images/departments/dermatology.png', desc:'Skin, hair & cosmetic dermatology.'},
  {id:6, title:'ENT', image:'/images/departments/ent.png', desc:'Ear, nose & throat care for all ages.'},
  {id:7, title:'Gastroenterology', image:'/images/departments/gastroenterology.png', desc:'Liver, pancreas & digestive system care.'},
  {id:8, title:'Nephrology', image:'/images/departments/nephrology.png', desc:'Kidney care & dialysis support.'},
  {id:9, title:'Pulmonology', image:'/images/departments/pulmonology.png', desc:'Asthma, COPD & critical respiratory care.'},
  {id:10, title:'Urology', image:'/images/departments/urology.png', desc:'Urinary & male reproductive health.'},
  {id:11, title:'Oncology', image:'/images/departments/oncology.png', desc:'Comprehensive cancer care & chemotherapy.'},
]

export default function Departments(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-8">Our Specialities</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map(d => (
          <div key={d.id} className="rounded-3xl overflow-hidden border bg-white shadow hover:shadow-lg transition">
            <div className="h-40 overflow-hidden">
              <img src={d.image} alt={d.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-blue-800">{d.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
