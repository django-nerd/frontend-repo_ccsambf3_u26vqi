import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Pacific Christian School
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A place where students are nurtured to grow in faith, character, and excellence. Discover a vibrant learning community committed to academic rigor and spiritual formation.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#admissions" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700 transition-colors">
              Apply Now
            </a>
            <a href="#about" className="inline-flex items-center rounded-lg bg-white text-blue-700 px-5 py-3 shadow border border-blue-200 hover:border-blue-300">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full rounded-2xl shadow-xl ring-1 ring-slate-200"
            src="https://images.unsplash.com/photo-1596495578065-8e9ad6e08481?q=80&w=1400&auto=format&fit=crop"
            alt="Students learning together"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
