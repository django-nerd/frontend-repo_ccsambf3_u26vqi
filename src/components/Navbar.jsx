import React from "react";

const Navbar = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#academics", label: "Academics" },
    { href: "#admissions", label: "Admissions" },
    { href: "#announcements", label: "News" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white grid place-content-center font-bold shadow">
            PC
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Pacific Christian School</div>
            <div className="text-xs text-slate-500">High School</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-blue-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 transition-colors">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
