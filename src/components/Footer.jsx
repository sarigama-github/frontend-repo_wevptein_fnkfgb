import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl font-serif">Naivedyam</div>
          <p className="mt-3 text-stone-600 text-sm">Authentic South Indian fine-dining. Pure vegetarian. Temple-inspired ambience. Serving Delhi NCR since 1994.</p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-stone-500">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/menu" className="hover:text-stone-900">Menu</a></li>
            <li><a href="/branches" className="hover:text-stone-900">Branches</a></li>
            <li><a href="/catering" className="hover:text-stone-900">Catering</a></li>
            <li><a href="/contact" className="hover:text-stone-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-stone-500">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            <li className="flex items-center gap-2"><Mail size={16}/> info@naivedyamrestaurants.in</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +91 9871 234 567</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Delhi NCR</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-stone-500">Newsletter</div>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Email"/>
            <button className="rounded-full bg-stone-900 text-white px-4 py-2 text-sm hover:bg-stone-800">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-stone-500">We respect your privacy.</p>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 py-6 border-t border-stone-200">© Naivedyam Restaurants – All Rights Reserved</div>
    </footer>
  )
}
