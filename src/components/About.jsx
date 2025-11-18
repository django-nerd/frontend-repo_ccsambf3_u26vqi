import React from "react";

const Stat = ({ value, label }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold text-blue-700">{value}</div>
    <div className="text-slate-500 text-sm">{label}</div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About Our School</h2>
            <p className="mt-4 text-slate-600">
              Pacific Christian School is a Christ-centered high school dedicated to developing the whole student—mind, body, and spirit. Our mission is to inspire students to lead with integrity, serve with compassion, and pursue excellence in all areas of life.
            </p>
            <p className="mt-3 text-slate-600">
              We offer rigorous academics, dynamic co-curricular activities, and a caring faculty who walk alongside students during their formative years.
            </p>
          </div>
          <div className="grid grid-cols-3 bg-blue-50 rounded-xl border border-blue-100">
            <Stat value="500+" label="Students" />
            <Stat value="40+" label="Faculty" />
            <Stat value="25" label="Clubs & Teams" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
