import React from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

const branches = [
  { name:'Hauz Khas Village', address:'Hauz Khas Village, New Delhi', phone:['+91 9871 234 567'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'Kalkaji', address:'Kalkaji, New Delhi', phone:['+91 9871 234 568'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'East Patel Nagar', address:'East Patel Nagar, New Delhi', phone:['+91 9871 234 569'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'Noida Sector 63', address:'Sector 63, Noida', phone:['+91 9871 234 570'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'Gurgaon Sohna Road', address:'Sohna Road, Gurgaon', phone:['+91 9871 234 571'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'Gurgaon Suncity (Sector 54)', address:'Suncity, Sector 54, Gurgaon', phone:['+91 9871 234 572'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
  { name:'Gurgaon Sushant Lok (Sector 27)', address:'Sushant Lok, Sector 27, Gurgaon', phone:['+91 9871 234 573'], hours:'12:00 PM – 11:00 PM', maps:'https://maps.google.com', },
]

export default function Branches(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Branches</h1>
      <p className="mt-2 text-stone-600">Find us across Delhi NCR.</p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((b) => (
          <div key={b.name} className="rounded-2xl bg-white border border-stone-200 p-5 shadow-sm">
            <div className="text-lg font-semibold">{b.name}</div>
            <div className="mt-2 text-sm text-stone-700 flex items-start gap-2"><MapPin size={16} className="mt-0.5"/> {b.address}</div>
            <div className="mt-2 text-sm text-stone-700 flex items-start gap-2"><Clock size={16} className="mt-0.5"/> {b.hours}</div>
            <div className="mt-2 text-sm text-stone-700">
              {b.phone.map(p => (
                <div key={p} className="flex items-center gap-2"><Phone size={16}/> <a href={`tel:${p.replace(/\s/g,'')}`} className="hover:underline">{p}</a></div>
              ))}
            </div>
            <a href={b.maps} target="_blank" className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-4 py-2 text-sm hover:bg-stone-800"><Navigation size={16}/> Get Directions</a>
            <div className="mt-4">
              <iframe title={`Map ${b.name}`} src={`https://www.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`} className="w-full h-40 rounded-xl border border-stone-200"></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
