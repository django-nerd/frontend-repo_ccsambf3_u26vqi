import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import NewsEvents from "./components/NewsEvents";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <NewsEvents />
        <Contact />
      </main>
      <footer className="py-10 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-white">Pacific Christian School</div>
            <div className="text-sm text-slate-400 mt-2">Shaping minds and hearts for a life of purpose.</div>
          </div>
          <div className="text-sm">
            <div className="text-slate-400">Quick Links</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#academics" className="hover:text-white">Academics</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="text-slate-400">Contact</div>
            <div className="mt-2">(555) 123-4567</div>
            <div>info@pacificchristian.edu</div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Pacific Christian School. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
