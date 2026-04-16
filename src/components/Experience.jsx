import React from 'react';

const jobs = [
  {
    role: 'Junior Developer',
    company: 'NIELIT HQ, Dwarka, Delhi',
    period: 'Feb 2026 – Present',
    type: 'Full-Time',
    points: [
      'Developing & maintaining the student portal serving 56 NIELIT centres pan-India.',
      'Working with .NET and MySQL to debug and enhance backend modules.',
      'Optimising website performance, fixing UI issues, and improving accessibility.',
      'Collaborating with senior scientists on real-world government production systems.',
    ],
    tags: ['.NET', 'MySQL', 'C#', 'Backend', 'Student Portal'],
    certificate: null,
  },
  {
    role: 'Web Developer Intern',
    company: 'NIELIT Ropar, Punjab',
    period: 'Aug 2025 – Feb 2026',
    type: 'Internship',
    points: [
      'Maintained and updated the official government website nielit.ac.in.',
      'Used PHP and MySQL to modify, debug, and enhance backend modules.',
      'Contributed to the NDU LMS Portal — database features & user management.',
      'Improved performance, fixed UI issues, and raised accessibility standards.',
    ],
    tags: ['PHP', 'MySQL', 'LMS', 'Government Web', 'Accessibility'],
    certificate: '/Rishikesh_certificate.pdf',
  },
  {
    role: 'Blockchain Intern',
    company: 'Hopping Minds Technologies Pvt. Ltd., Chandigarh',
    period: 'Feb 2025 – Aug 2025',
    type: 'Internship',
    points: [
      'Completed a mandatory 6-month offline internship as per university norms.',
      'Gained hands-on exposure to Blockchain fundamentals and decentralized technologies.',
      'Developed corporate environment skills and professional work ethics under industry mentors.',
      'Trained to handle real-world IT industry challenges through project-based learning.',
    ],
    tags: ['Blockchain', 'Decentralized Tech', 'Web3', 'Corporate Training'],
    certificate: '/Rishikesh_hopping_minds.pdf',
  },
];

export default function Experience() {
  return (
    <>
      <style>{`
        .exp-section {
          padding: 7rem 0;
          background: #586F7C;
        }
        .exp-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .exp-eyebrow {
       font-family: 'DM Mono', monospace;
          font-size: 15px;
          color: #000000;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .exp-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.35);
        }
        .exp-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 4rem 0;
        }
        .exp-title em {
          font-style: normal;
          font-weight: 600;
          color: #000000;
        }

        /* Timeline */
        .exp-timeline { position: relative; }
        .exp-timeline-line {
          position: absolute;
          left: 20px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0));
        }
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .exp-item {
          display: flex;
          gap: 2.5rem;
          padding-left: 60px;
          position: relative;
        }
        .exp-dot {
          position: absolute;
          left: 13px; top: 16px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #586F7C;
          border: 2px solid #ffffff;
          box-shadow: 0 0 10px rgba(255,255,255,0.4);
          z-index: 1;
        }
        .exp-card {
          flex: 1;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 1.75rem;
          transition: all 0.25s;
        }
        .exp-card:hover {
          background: rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.32);
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
        .exp-card-head {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1rem;
        }
        .exp-role {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .exp-company {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
        }
        .exp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .exp-period {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.45);
        }
        .exp-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 3px 10px;
          border-radius: 999px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(0,0,0,0.3);
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .exp-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1rem;
        }
        .exp-points li {
          display: flex;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.62);
          line-height: 1.65;
        }
        .exp-points li::before {
          content: '▸';
          color: rgba(255,255,255,0.5);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .exp-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .exp-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.25);
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .exp-cert-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 14px;
          border-radius: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          text-decoration: none;
          background: #000000;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s;
        }
        .exp-cert-btn:hover {
          background: #1a1a1a;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }

        @media (max-width: 700px) {
          .exp-item  { padding-left: 48px; gap: 1.5rem; }
          .exp-inner { padding: 0 1.4rem; }
          .exp-section { padding: 5rem 0; }
          .exp-card { padding: 1.25rem; }
        }
      `}</style>

      <section id="experience" className="exp-section">
        <div className="exp-inner">

          <p className="exp-eyebrow">Experience</p>
          <h2 className="exp-title">
            Where I've <em>Worked</em>
          </h2>

          <div className="exp-timeline">
            <div className="exp-timeline-line" />
            <div className="exp-list">
              {jobs.map((j, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-dot" />
                  <div className="exp-card">
                    <div className="exp-card-head">
                      <div>
                        <div className="exp-role">{j.role}</div>
                        <div className="exp-company">@ {j.company}</div>
                      </div>
                      <div className="exp-meta">
                        <span className="exp-period">{j.period}</span>
                        <span className="exp-badge">{j.type}</span>
                      </div>
                    </div>

                    <ul className="exp-points">
                      {j.points.map((pt, k) => (
                        <li key={k}>{pt}</li>
                      ))}
                    </ul>

                    <div className="exp-footer">
                      <div className="exp-tags">
                        {j.tags.map(t => (
                          <span key={t} className="exp-tag">{t}</span>
                        ))}
                      </div>
                      {j.certificate && (
                        <a href={j.certificate} target="_blank" rel="noopener noreferrer"
                          className="exp-cert-btn">
                          View Certificate ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}