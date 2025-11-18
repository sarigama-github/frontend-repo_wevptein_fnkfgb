import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Award, Sparkles, MapPin, Phone, FileDown, Utensils } from 'lucide-react'

const chip = 'inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 text-amber-900 px-3 py-1 text-xs'

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-12 gap-10 relative">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className={chip}><Sparkles size={14}/> Authentic South Indian Dining — Made with Devotion</div>
            <h1 className="mt-4 text-5xl md:text-6xl font-serif tracking-tight leading-tight">Pure. Devotional. Exquisite.</h1>
            <p className="mt-4 text-stone-600 text-lg">Since 1994, Naivedyam has offered an immersive temple-inspired dining experience with time-honoured recipes, homely purity and warm hospitality.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-stone-900 text-white px-5 py-3 text-sm hover:bg-stone-800 inline-flex items-center gap-2"><Utensils size={18}/> View Menu</Link>
              <Link to="/branches" className="rounded-full border border-stone-300 px-5 py-3 text-sm hover:bg-stone-100 inline-flex items-center gap-2"><MapPin size={18}/> Find a Branch</Link>
              <a href="#book" className="rounded-full bg-amber-600 text-white px-5 py-3 text-sm hover:bg-amber-700">Book a Table</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-stone-700">
              <div className="flex items-center gap-2"><Award size={18}/> Blue Moon Award</div>
              <div className="flex items-center gap-2"><Star size={18}/> Listed on Diners Club</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" role="img" aria-label="Crisp dosa served with chutneys and sambar"/>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[{
            title: 'Purity',
            desc: '100% vegetarian. Sattvic ingredients. Prepared with devotion.'
          },{
            title: 'Tradition',
            desc: 'Authentic recipes from Karnataka and Tamil Nadu, perfected over decades.'
          },{
            title: 'Ambience',
            desc: 'Temple-inspired decor, brass lamps and soothing classical music.'
          }].map((h) => (
            <div key={h.title} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="text-lg font-semibold">{h.title}</div>
              <p className="mt-2 text-stone-600 text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-serif">What guests say</h2>
            <div className="text-sm text-stone-600">Real reviews from our patrons</div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-center gap-1 text-amber-600">{'★★★★★'}</div>
                <p className="mt-3 text-stone-700">“Exceptional dosas and such a serene ambience. Feels like a spiritual meal.”</p>
                <div className="mt-4 text-sm text-stone-500">— A delighted guest</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/branches" className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-5 py-3 text-sm hover:bg-stone-800"><MapPin size={18}/> Find Your Nearest Naivedyam</Link>
          </div>
        </div>
      </section>

      {/* PDF Menu */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif">Download our Menu</h3>
          <p className="mt-2 text-stone-600">A curated selection of classics and seasonal specials.</p>
          <a href="/menu.pdf" className="mt-5 inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm hover:bg-stone-100"><FileDown size={18}/> Download PDF</a>
        </div>
      </section>
    </div>
  )
}
