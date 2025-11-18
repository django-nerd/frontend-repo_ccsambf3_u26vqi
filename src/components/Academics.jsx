import React from "react";

const Track = ({ title, desc }) => (
  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
    <div className="font-semibold text-slate-900">{title}</div>
    <div className="text-sm text-slate-600 mt-1">{desc}</div>
  </div>
);

const Academics = () => {
  return (
    <section id="academics" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Academics</h2>
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
          A comprehensive curriculum designed to challenge and inspire. Students develop critical thinking, creativity, and a lifelong love of learning.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Track title="STEM" desc="Advanced math, physics, chemistry, and computer science with hands-on labs and competitions." />
          <Track title="Humanities" desc="Literature, history, and languages emphasizing discussion, writing, and cultural literacy." />
          <Track title="Arts" desc="Visual arts, music, drama, and digital media with showcases and performances." />
          <Track title="Biblical Studies" desc="Courses that deepen faith and understanding, integrated across the curriculum." />
          <Track title="Athletics" desc="Competitive teams and fitness programs that build character and teamwork." />
          <Track title="Leadership" desc="Opportunities in student government, service learning, and spiritual leadership." />
        </div>
      </div>
    </section>
  );
};

export default Academics;
