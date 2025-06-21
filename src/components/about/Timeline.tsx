
import React from 'react';

const Timeline = () => {
  const milestones = [
    { year: "1981", event: "Almonte School founded in the serene hills of Arunachal Pradesh" },
    { year: "1985", event: "First batch of 50 students graduates with distinction" },
    { year: "1992", event: "Expanded to include senior secondary education" },
    { year: "1998", event: "Introduced computer education and science laboratories" },
    { year: "2005", event: "Achieved WEQSC accreditation and UNICEF recognition" },
    { year: "2010", event: "Launched international exchange programs" },
    { year: "2015", event: "Established digital learning initiatives" },
    { year: "2020", event: "Successfully transitioned to hybrid learning model" },
    { year: "2024", event: "Celebrating 43 years of educational excellence" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Journey Through Time</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-16 text-center">
                  {milestone.year}
                </div>
                <div className="bg-card p-4 rounded-lg shadow flex-1">
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
