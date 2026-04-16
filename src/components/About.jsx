import React from 'react';

const stack = [
  'React.js','Node.js','Express.js','MongoDB','.NET / C#','PHP',
  'MySQL / SQL','REST APIs','JWT Auth','Git & GitHub','MVC / MVVM',
  'Tailwind CSS','HTML','CSS','JavaScript','jQuery','IoT Systems',
];

const stats = [
  { num: '1+',  label: 'Year of Professional Experience'          },
  { num: '2+',  label: 'Live Production Projects Worked On'       },
  { num: '8+',  label: 'Certifications Earned'                    },
  { num: '10+', label: 'Projects Built & Delivered'               },
  { num: '55+', label: 'NIELIT Centres Served via Student Portal' },
];

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 7rem 0;
          background: #586F7C;
        }
        .about-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .about-eyebrow {
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
        .about-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.4);
        }
        .about-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 4rem 0;
        }
        .about-title em {
          font-style: normal;
          font-weight: 600;
          color: #000000;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 4rem;
          align-items: start;
        }
        .about-bio p {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.68);
          line-height: 1.9;
          margin-bottom: 1.25rem;
        }
        .about-bio strong {
          color: #ffffff;
          font-weight: 600;
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 1.75rem;
        }
        .about-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,0.2);
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: default;
          transition: all 0.2s;
        }
        .about-tag:hover {
          background: #000000;
          color: #ffffff;
          border-color: #000000;
        }
        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .about-stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 1.1rem 1.4rem;
          background: rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          transition: all 0.2s;
          cursor: default;
        }
        .about-stat-card:hover {
          background: rgba(0,0,0,0.28);
          border-color: rgba(255,255,255,0.3);
          transform: translateX(4px);
        }
        .about-stat-num {
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: 2rem;
          color: #ffffff;
          line-height: 1;
          min-width: 56px;
        }
        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          line-height: 1.4;
        }
        .about-terminal {
          margin-top: 6px;
          padding: 1rem 1.4rem;
          background: #000000;
          border-radius: 12px;
          border-left: 2px solid rgba(255,255,255,0.3);
        }
        .about-terminal p {
          margin: 0;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          line-height: 1.9;
        }
        .about-terminal .prompt { color: rgba(88,111,124,0.9); }
        .about-terminal .val    { color: rgba(255,255,255,0.75); }
        .about-terminal .ok     { color: #6fcf97; }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 560px) {
          .about-inner { padding: 0 1.4rem; }
          .about-section { padding: 5rem 0; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-inner">

          <p className="about-eyebrow">About Me</p>
          <h2 className="about-title">
            Who I <em>Am</em>
          </h2>

          <div className="about-grid">

            {/* LEFT: Bio */}
            <div className="about-bio">
              <p>
                I'm a <strong>Multi-Domain Full Stack Developer</strong> with hands-on experience
                across the <strong>MERN stack</strong>, <strong>.NET / C#</strong>, and{' '}
                <strong>PHP / MySQL</strong> — building everything from government portals to
                real-time web apps and IoT systems.
              </p>
              <p>
                Currently working as a <strong>Junior Developer at NIELIT HQ, Dwarka, Delhi</strong>,
                I develop and maintain the student portal that powers 55+ NIELIT centres across India —
                a live, production-grade government system touching thousands of students daily.
              </p>
              <p>
                Previously interned at <strong>NIELIT Ropar</strong> maintaining the official
                government website and contributing to the NDU LMS portal using PHP & MySQL, and at{' '}
                <strong>Hopping Minds Technologies, Chandigarh</strong> gaining exposure to Blockchain
                and decentralized technologies.
              </p>
              <p>
                I hold a <strong>B.Tech in Information Technology</strong> from CGC Landran (IKG PTU)
                with a CGPA of <strong>7.77</strong>. Outside of work, I enjoy Cricket, Chess, Poetry,
                Cooking, and learning through side projects.
              </p>

              <div className="about-tags">
                {stack.map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* RIGHT: Stats */}
            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="about-stat-card">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}

              <div className="about-terminal">
                <p>
                  <span className="prompt">&gt;</span>{' '}
                  Domains: <span className="val">MERN · .NET · PHP · SQL · IoT</span><br />
                  <span className="prompt">&gt;</span>{' '}
                  Status: <span className="ok">✦ Open to opportunities</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}