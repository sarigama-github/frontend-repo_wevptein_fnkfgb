import React from 'react'

const images = Array.from({length:12}).map((_,i)=>({
  url:`https://images.unsplash.com/photo-1546549039-49e9d3e9ed4c?q=80&w=1600&auto=format&fit=crop`,
  alt:'South Indian dish and ambience'
}))

export default function Gallery(){
  const [active, setActive] = React.useState(null)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Gallery</h1>
      <p className="mt-2 text-stone-600">Food and ambience from our restaurants.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button key={idx} onClick={() => setActive(img.url)} className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white">
            <div className="aspect-square bg-cover bg-center" style={{backgroundImage:`url(${img.url})`}} role="img" aria-label={img.alt}/>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"/>
          </button>
        ))}
      </div>

      {active && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={()=>setActive(null)}>
          <img src={active} alt="Selected" className="max-h-[85vh] rounded-xl shadow-2xl"/>
        </div>
      )}
    </div>
  )
}
