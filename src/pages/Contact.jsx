import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow border">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border" />
          <input placeholder="Phone" className="w-full px-4 py-3 rounded-xl border" />
          <textarea placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border h-28" />
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white">Send</button>
        </form>
      </div>
      <div className="rounded-3xl overflow-hidden shadow border">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full min-h-[320px]"
        />
      </div>
    </section>
  )
}
