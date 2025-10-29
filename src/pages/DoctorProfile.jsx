import React from 'react'
import { useParams, Link } from 'react-router-dom'

const data = {
  murugan: { name:'Dr. Murugan', dept:'Cardiology', bio:'Senior interventional cardiologist with 20+ years experience.', image:'https://via.placeholder.com/800x400?text=Dr+Murugan' },
  sneha: { name:'Dr. Sneha', dept:'Pediatrics', bio:'Pediatrician specializing in neonatology and child wellness.', image:'https://via.placeholder.com/800x400?text=Dr+Sneha' },
  arun: { name:'Dr. Arun', dept:'Orthopedics', bio:'Orthopedic surgeon with expertise in joint replacement.', image:'https://via.placeholder.com/800x400?text=Dr+Arun' },
}

export default function DoctorProfile(){
  const { id } = useParams()
  const doc = data[id]
  if(!doc){
    return <section className="max-w-5xl mx-auto px-4 py-16"><p>Doctor not found.</p></section>
  }
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl overflow-hidden border bg-white shadow">
        <img src={doc.image} alt={doc.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-blue-900">{doc.name}</h2>
          <p className="text-blue-700 font-medium">{doc.dept}</p>
          <p className="text-gray-700 mt-3">{doc.bio}</p>
          <div className="mt-6 flex gap-3">
            <Link to="/appointment" className="px-4 py-2 rounded-lg bg-blue-600 text-white">Book Appointment</Link>
            <Link to="/doctors" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800">Back</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
