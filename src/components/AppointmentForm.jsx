import React, { useState } from 'react'

export default function AppointmentForm({ doctor }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const slots = ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM']

  const submit = (e) => {
    e.preventDefault()
    const msg = `Hello, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}\nDoctor: ${doctor?.name || 'Any'}\nDate: ${date}\nTime: ${time}`
    const url = `https://wa.me/918098096555?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} required placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} required
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <select value={time} onChange={e=>setTime(e.target.value)} required
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select Time</option>
          {slots.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <button type="submit"
        className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow hover:opacity-95">
        Confirm via WhatsApp
      </button>
    </form>
  )
}
