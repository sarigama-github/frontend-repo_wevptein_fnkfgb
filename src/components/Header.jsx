import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, MapPin, CalendarCheck } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/menu', label: 'Menu' },
  { to: '/branches', label: 'Branches' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/catering', label: 'Catering' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 via-amber-300 to-amber-100 border border-amber-300" />
            <div className="leading-tight">
              <div className="text-xl font-serif tracking-tight">Naivedyam</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Since 1994</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm font-medium transition-colors hover:text-stone-900 ${isActive ? 'text-stone-900' : 'text-stone-600'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#branches" className="inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900"><MapPin size={18}/> Find Us</a>
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-4 py-2 text-sm hover:bg-stone-800"><Phone size={18}/> Call</a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 text-sm hover:bg-amber-700"><CalendarCheck size={18}/> Book Table</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `block text-base py-1 ${isActive ? 'text-stone-900' : 'text-stone-700'}`}>
                {n.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-4 py-2 text-sm"><Phone size={18}/> Call</a>
              <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 text-sm"><CalendarCheck size={18}/> Book</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
