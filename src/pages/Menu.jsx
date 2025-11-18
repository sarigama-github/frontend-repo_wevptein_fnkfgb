import React from 'react'

const categories = [
  { key:'starters', title:'Starters' },
  { key:'dosas', title:'Dosas' },
  { key:'idli-vada', title:'Idli & Vada' },
  { key:'combos', title:'Combos' },
  { key:'thalis', title:'Thalis' },
  { key:'sweets', title:'Sweets' },
  { key:'drinks', title:'Drinks' },
]

const sampleItems = Array.from({length:8}).map((_,i)=>({
  title:`Dish ${i+1}`,
  desc:'A delightful preparation with authentic spices and flavours.',
  img:'https://images.unsplash.com/photo-1550409176-16e4c1d7d78e?q=80&w=1200&auto=format&fit=crop'
}))

export default function Menu(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Our Menu</h1>
      <p className="mt-2 text-stone-600">Explore classics and seasonal specials. For the full list, download the PDF.</p>

      <div className="mt-8 grid md:grid-cols-4 gap-4">
        {categories.map(c => (
          <a key={c.key} href={`#${c.key}`} className="rounded-full border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100">{c.title}</a>
        ))}
      </div>

      {categories.map(c => (
        <section key={c.key} id={c.key} className="mt-12">
          <h2 className="text-2xl font-serif">{c.title}</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleItems.map((item, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm">
                <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage:`url(${item.img})`}} role="img" aria-label={item.title}/>
                <div className="p-4">
                  <div className="font-medium">{item.title}</div>
                  <p className="text-sm text-stone-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 text-center">
        <a href="/menu.pdf" className="inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm hover:bg-stone-100">Download Full PDF</a>
      </div>
    </div>
  )
}
