import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("Thanks! We will reach out soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Unable to send at the moment.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-slate-600">Have questions? Send us a message and our admissions team will connect with you.</p>
            <div className="mt-6 text-sm text-slate-600">
              <div>Phone: (555) 123-4567</div>
              <div>Email: info@pacificchristian.edu</div>
              <div>Address: 123 Oceanview Ave, Pacific City</div>
            </div>
          </div>
          <form onSubmit={submit} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <div className="grid grid-cols-1 gap-4">
              <input className="px-3 py-2 rounded-lg border border-slate-300" placeholder="Full name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
              <input type="email" className="px-3 py-2 rounded-lg border border-slate-300" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
              <input className="px-3 py-2 rounded-lg border border-slate-300" placeholder="Subject" value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} required />
              <textarea rows="4" className="px-3 py-2 rounded-lg border border-slate-300" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700 transition-colors" type="submit">Send Message</button>
              {status && <div className="text-sm text-slate-600">{status}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
