import React from "react";

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Admissions</h2>
            <p className="mt-4 text-slate-600">
              We're excited to welcome new families to our community. Applications are reviewed on a rolling basis. Campus tours are available by appointment.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Submit online application</li>
              <li>Provide transcripts and recommendation</li>
              <li>Interview and placement assessment</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <div className="font-semibold text-slate-900">Key Dates</div>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <div className="text-slate-500">Applications open</div>
                <div className="font-medium">October 1</div>
              </div>
              <div>
                <div className="text-slate-500">Priority Deadline</div>
                <div className="font-medium">January 15</div>
              </div>
              <div>
                <div className="text-slate-500">Decisions Released</div>
                <div className="font-medium">March 15</div>
              </div>
              <div>
                <div className="text-slate-500">Financial Aid Deadline</div>
                <div className="font-medium">February 1</div>
              </div>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-3 shadow hover:bg-blue-700 transition-colors">
              Request Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
