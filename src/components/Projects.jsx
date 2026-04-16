import React, { useState } from 'react';

const PROJECTS = [
  { num:'01', featured:true,
    title:'Krishi Sahayak – Organic Harvest Hub',
    desc:'A farmer-centric web platform empowering rural users with real-time weather forecasts, crop details, soil testing recommendations, research papers, and agri-business ideas. Includes resources for vermicompost, poultry & fish farming plus the latest government schemes and news.',
    tags:['React.js','Tailwind CSS','JavaScript','OpenWeatherMap API','React Router'],
    live:'https://krishi-sahayak-azlkm2etx-rishikesh-awasthis-projects.vercel.app/',
    github:'https://github.com/avasthirishi/krishi_sahyak',
  },
  { num:'02', featured:true,
    title:'Smart IoT Controller Switch',
    desc:'Built with ESP8266, this Smart IoT Switch enables remote control of home appliances via Wi-Fi. Features manual switch control, web interface access, state memory for power recovery, OTA updates, and automation. Integrated for Google Assistant/Voice control.',
    tags:['ESP8266','IoT','Wi-Fi','Embedded Systems','OTA Updates','Automation'],
    live:'https://github.com/avasthirishi/IOT_Controller_Switch',
    github:'https://github.com/avasthirishi/IOT_Controller_Switch',
  },
  { num:'03', featured:true,
    title:'LifeBlog – Full Stack Blogging Platform',
    desc:'A full-stack blogging platform where users can create, edit, and share stories. Features JWT authentication, personal dashboard, image uploads via Cloudinary, and a rich responsive UI. Built with the MERN stack and deployed on Vercel + Render.',
    tags:['React.js','Node.js','Express.js','MongoDB','JWT','Cloudinary','Tailwind CSS','REST API'],
    live:'https://life-blog-frontend.vercel.app/',
    github:'https://github.com/avasthirishi/life_blog-frontend',
  },
  { num:'04',
    title:'Chess Game',
    desc:'Web chess using chess.js & chessboard.js with move highlighting, capture detection, check/checkmate logic, and pawn promotion.',
    tags:['HTML','CSS','JavaScript','chess.js'],
    live:'https://avasthirishi.github.io/chess-game/',
    github:'https://github.com/avasthirishi/chess-game',
  },
  { num:'05',
    title:'Restaurant Website',
    desc:'Interactive restaurant platform for menu browsing, table reservations, chef specials, and customer feedback with seamless UX.',
    tags:['HTML','CSS','Bootstrap'],
    live:'https://github.com/avasthirishi/a-resturent-website',
    github:'https://github.com/avasthirishi/a-resturent-website',
  },
  { num:'06',
    title:'Nirman School of Education – Website',
    desc:'A fully responsive school website with sections for Home, About, Academics, and Admissions. Includes Notice board, Events, Gallery, and an Online Enquiry Form. Built with a PHP & SQL backend and deployed on Render.',
    tags:['PHP','Tailwind CSS','SQL','EJS'],
    live:'https://school-site-1ut1.onrender.com/',
    github:'https://github.com/avasthirishi/school_site',
  },
];

// Hero palette
const LIGHT   = '#586F7C'; // hero --light (slate-blue accent)
const DARK    = '#000000';
const DARK_S  = '#0d0d0d';
const BORDER  = '#1a1a1a';
const OFF_W   = '#eef1f3';

function Card({ p }) {
  const [hov, setHov] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .proj-card {
          position: relative;
          border-radius: 14px;
          padding: 1.5rem;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
        }
        .proj-card:hover {
          transform: translateY(-6px);
        }
        .proj-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: ${LIGHT};
          transition: opacity 0.3s;
        }
        .proj-card-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .proj-feat-badge {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          padding: 2px 8px;
          border-radius: 3px;
          letter-spacing: 1px;
          transition: all 0.3s;
        }
        .proj-open-hint {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          margin-left: auto;
          transition: opacity 0.2s;
          color: ${LIGHT};
        }
        .proj-card-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 8px;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .proj-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.75;
          margin-bottom: 14px;
          transition: color 0.3s;
        }
        .proj-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          padding: 3px 9px;
          border-radius: 3px;
          transition: all 0.3s;
        }
        .proj-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .proj-link:hover {
          color: ${LIGHT} !important;
        }
      `}</style>

      <div
        className="proj-card"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => p.live && p.live !== '#' && window.open(p.live, '_blank', 'noopener,noreferrer')}
        style={{
          background: hov ? DARK_S : DARK,
          border: `1px solid ${hov ? LIGHT : BORDER}`,
          boxShadow: hov ? `0 16px 40px rgba(88,111,124,0.18)` : 'none',
        }}
      >
        {/* Top accent bar */}
        <div className="proj-card-bar" style={{ opacity: hov ? 1 : 0.2 }} />

        {/* Subtle glow overlay */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 14, pointerEvents: 'none',
          background: `radial-gradient(circle at 50% 0%, rgba(88,111,124,0.08) 0%, transparent 70%)`,
          opacity: hov ? 1 : 0,
          transition: 'opacity 0.3s',
        }} />

        {/* Number + badges */}
        <div className="proj-card-num" style={{ color: hov ? LIGHT : 'rgba(255,255,255,0.3)' }}>
          PROJECT {p.num}
          {p.featured && (
            <span
              className="proj-feat-badge"
              style={{
                color: hov ? LIGHT : 'rgba(255,255,255,0.3)',
                background: hov ? 'rgba(88,111,124,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hov ? 'rgba(88,111,124,0.5)' : 'rgba(255,255,255,0.1)'}`,
              }}
            >FEATURED</span>
          )}
          {p.live && p.live !== '#' && (
            <span className="proj-open-hint" style={{ opacity: hov ? 1 : 0 }}>↗ open</span>
          )}
        </div>

        {/* Title */}
        <h3
          className="proj-card-title"
          style={{ color: hov ? LIGHT : OFF_W }}
        >{p.title}</h3>

        {/* Desc */}
        <p
          className="proj-card-desc"
          style={{ color: hov ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.45)' }}
        >{p.desc}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16, position: 'relative', zIndex: 1 }}>
          {p.tags.map(t => (
            <span
              key={t}
              className="proj-tag"
              style={{
                color: hov ? LIGHT : 'rgba(255,255,255,0.38)',
                background: hov ? 'rgba(88,111,124,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hov ? 'rgba(88,111,124,0.35)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 16, position: 'relative', zIndex: 1 }} onClick={e => e.stopPropagation()}>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className="proj-link"
            style={{ color: 'rgba(255,255,255,0.3)' }}>
            ⌥ GitHub
          </a>
          {p.live && p.live !== '#' && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="proj-link"
              style={{ color: 'rgba(255,255,255,0.3)' }}>
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .proj-section-label {
       font-family: 'DM Mono', monospace;
          font-size: 15px;
          color: #586F7C;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .proj-section-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          color: ${OFF_W};
          margin: 0 0 4rem 0;
          line-height: 1.05;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
        }

        .proj-section-title em {
          font-style: normal;
          font-weight: 600;
          color: ${LIGHT};
        }

        .proj-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          color: ${OFF_W};
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.2s;
        }
        .proj-cta:hover {
          background: rgba(88,111,124,0.15);
          border-color: ${LIGHT};
          color: ${LIGHT};
          transform: translateY(-2px);
        }
      `}</style>

      <section id="projects" style={{ padding: '7rem 0', background: DARK }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2.5rem' }}>

          <p className="proj-section-label">
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,0.25)' }} />
            Projects
          </p>

          <h2 className="proj-section-title">
            Things I've <em>Built</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: 16,
          }}>
            {PROJECTS.map((p, i) => <Card key={i} p={p} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a
              href="https://github.com/avasthirishi"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-cta"
            >View All on GitHub ↗</a>
          </div>

        </div>
      </section>
    </>
  );
}