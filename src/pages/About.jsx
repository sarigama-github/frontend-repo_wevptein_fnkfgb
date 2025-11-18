import React from 'react'

export default function About(){
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif">Our Story</h1>
      <p className="mt-4 text-stone-700 leading-relaxed">Founded in 1994 by Shekar Bangera, Naivedyam means “Food offered to God”. We embody purity, devotion and authenticity in every dish. Our temple-inspired interiors, brass lamps and traditional music create a serene, homely environment where every meal feels sacred.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="text-lg font-semibold">Philosophy</div>
          <p className="mt-2 text-stone-600 text-sm">Purity of ingredients, traditional recipes and heartfelt hospitality. We serve vegetarian South Indian cuisine rooted in heritage.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="text-lg font-semibold">Awards</div>
          <p className="mt-2 text-stone-600 text-sm">Blue Moon Award, Listed on Diners Club and loved by generations of guests across Delhi NCR.</p>
        </div>
      </div>
    </section>
  )
}
