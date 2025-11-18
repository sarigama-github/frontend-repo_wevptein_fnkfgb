import React from 'react'

export default function Catering(){
  const [status, setStatus] = React.useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${backend}/catering`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      const data = await res.json()
      if(res.ok){ setStatus({ok:true, msg:data.message || 'Request sent'}) } else { setStatus({ok:false, msg:data.detail || 'Something went wrong'}) }
    } catch (e) { setStatus({ok:false, msg:'Network error'}) }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Catering & Corporate Packaging</h1>
      <p className="mt-2 text-stone-600">From intimate gatherings to large corporate events, we offer authentic South Indian catering with premium packaging.</p>

      <ul className="mt-6 list-disc list-inside text-stone-700">
        <li>Customizable vegetarian menus</li>
        <li>On-site live counters on request</li>
        <li>Corporate meal boxes and bulk orders</li>
      </ul>

      <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="name" placeholder="Name" required/>
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="company" placeholder="Company"/>
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" type="email" name="email" placeholder="Email" required/>
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="phone" placeholder="Phone" required/>
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="event_date" placeholder="Event date"/>
        <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" type="number" name="guest_count" placeholder="Guest count"/>
        <textarea className="sm:col-span-2 rounded-lg border border-stone-300 px-3 py-2 text-sm" name="message" placeholder="Message" rows="4"/>
        <button className="sm:col-span-2 rounded-full bg-stone-900 text-white px-5 py-3 text-sm hover:bg-stone-800">Request Catering Quote</button>
        {status && (<div className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>)}
      </form>
    </div>
  )
}
