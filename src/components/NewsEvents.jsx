import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

const Card = ({ title, subtitle, body }) => (
  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
    <div className="font-semibold text-slate-900">{title}</div>
    {subtitle && <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>}
    {body && <div className="text-sm text-slate-600 mt-2">{body}</div>}
  </div>
);

const NewsEvents = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aRes, eRes] = await Promise.all([
          fetch(`${API_BASE}/api/announcements`),
          fetch(`${API_BASE}/api/events`),
        ]);
        const a = await aRes.json();
        const e = await eRes.json();
        setAnnouncements(Array.isArray(a) ? a : []);
        setEvents(Array.isArray(e) ? e : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="announcements" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">News & Announcements</h2>
            <p className="mt-3 text-slate-600">Latest updates from our campus.</p>
            <div className="mt-6 grid gap-4">
              {loading ? (
                <div className="text-slate-500 text-sm">Loading...</div>
              ) : announcements.length === 0 ? (
                <div className="text-slate-500 text-sm">No announcements yet.</div>
              ) : (
                announcements.map((a, i) => (
                  <Card
                    key={i}
                    title={a.title}
                    subtitle={a.published_at ? new Date(a.published_at).toLocaleString() : null}
                    body={a.body}
                  />
                ))
              )}
            </div>
          </div>
          <div id="events">
            <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
            <p className="mt-3 text-slate-600">Mark your calendar.</p>
            <div className="mt-6 grid gap-4">
              {loading ? (
                <div className="text-slate-500 text-sm">Loading...</div>
              ) : events.length === 0 ? (
                <div className="text-slate-500 text-sm">No events scheduled.</div>
              ) : (
                events.map((ev, i) => (
                  <Card
                    key={i}
                    title={ev.title}
                    subtitle={`${ev.event_date}${ev.location ? ` • ${ev.location}` : ""}`}
                    body={ev.description}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
