import React from 'react'
import { useSearchParams } from 'react-router-dom'
import AppointmentForm from '../components/AppointmentForm'

const doctors = {
  murugan: { name:'Dr. Murugan (Cardiology)' },
  sneha: { name:'Dr. Sneha (Pediatrics)' },
  arun: { name:'Dr. Arun (Orthopedics)' },
}

export default function Appointment(){
  const [params] = useSearchParams()
  const docId = params.get('doctor')
  const doctor = doctors[docId] || null

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow border">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Book Appointment</h2>
        <p className="text-gray-700 mb-6">{doctor ? `Booking with ${doctor.name}` : 'Select preferred date and time'}</p>
        <AppointmentForm doctor={doctor} />
      </div>
    </section>
  )
}
