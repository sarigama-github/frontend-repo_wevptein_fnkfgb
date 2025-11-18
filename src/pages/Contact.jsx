import React from 'react'

export default function Contact(){
  const [status, setStatus] = React.useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${backend}/inquiry`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      const data = await res.json()
      if(res.ok){ setStatus({ok:true, msg:data.message || 'Message sent'}) } else { setStatus({ok:false, msg:data.detail || 'Something went wrong'}) }
    } catch (e) { setStatus({ok:false, msg:'Network error'}) }
  }

  const outlets = [
    'Hauz Khas Village, New Delhi',
    'Kalkaji, New Delhi',
    'East Patel Nagar, New Delhi',
    'Noida Sector 63, Noida',
    'Gurgaon Sohna Road',
    'Gurgaon Suncity (Sector 54)',
    'Gurgaon Sushant Lok (Sector 27)'
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Contact Us</h1>
      <p className="mt-2 text-stone-600">For reservations, catering or feedback, we’d love to hear from you.</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm grid grid-cols-2 gap-4">
          <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="name" placeholder="Name" required/>
          <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" type="email" name="email" placeholder="Email" required/>
          <input className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="phone" placeholder="Phone"/>
          <select className="rounded-lg border border-stone-300 px-3 py-2 text-sm" name="branch">
            <option value="">General Inquiry</option>
            {outlets.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <textarea className="col-span-2 rounded-lg border border-stone-300 px-3 py-2 text-sm" name="message" placeholder="Message" rows="4" required/>
          <button className="col-span-2 rounded-full bg-stone-900 text-white px-5 py-3 text-sm hover:bg-stone-800">Send Message</button>
          {status && (<div className={`col-span-2 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>)}
        </form>

        <div className="space-y-6">
          {outlets.map((o) => (
            <div key={o} className="rounded-2xl bg-white border border-stone-200 p-5 shadow-sm">
              <div className="font-medium">{o}</div>
              <div className="mt-3">
                <iframe title={`Map ${o}`} src={`https://www.google.com/maps?q=${encodeURIComponent(o)}&output=embed`} className="w-full h-48 rounded-xl border border-stone-200"></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-sm text-stone-600">
        Business email: <a href="mailto:info@naivedyamrestaurants.in" className="underline">info@naivedyamrestaurants.in</a>
      </div>
    </div>
  )
}
