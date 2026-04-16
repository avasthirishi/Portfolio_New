import React from 'react';

const LIST = [
  { icon: '🥈', text: '2nd place — GFG Student Chapter Coding Hackathon, CEC (2022)',           tag: 'Hackathon'   },
  { icon: '🚀', text: 'Competed in Smart India Hackathon 2023 — Fake Social Media ID Detector', tag: 'SIH 2023'    },
  { icon: '🔬', text: 'Participated in National Science Day Project Competition (2022)',         tag: 'Competition' },
  { icon: '🏏', text: 'Inter-College Cricket Tournament — IKGPTU University',                   tag: 'Sports'      },
  { icon: '🏆', text: 'North Zone Inter-University Cricket Tournament',                         tag: 'Sports'      },
  { icon: '✍️', text: 'Freelance Content Writer — technical & general topics',                 tag: 'Freelance'   },
  { icon: '💡', text: 'Subject Matter Expert at Chegg',                                        tag: 'Expert'      },
];

export default function Achievements() {
  return (
    <>
      <style>{`
        .ach-section {
          padding: 7rem 0;
          background: #586F7C;
        }
        .ach-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .ach-eyebrow {
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
        .ach-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.18);
        }
        .ach-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 4rem 0;
        }
        .ach-title span { color: #000000; }
        .ach-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ach-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 1rem 1.4rem;
          background: #2F4550;
          border: 1px solid #1e1e1e;
          border-radius: 12px;
          transition: all 0.25s;
          cursor: default;
        }
        .ach-card:hover {
          border-color: #586F7C;
          transform: translateX(6px);
          box-shadow: 0 0 20px rgba(88,111,124,0.1);
        }
        .ach-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          background: rgba(88,111,124,0.12);
          border: 1px solid rgba(88,111,124,0.2);
          flex-shrink: 0;
        }
        .ach-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #F4F4F9;
          flex: 1;
          line-height: 1.6;
        }
        .ach-tag {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 1px;
          flex-shrink: 0;
          white-space: nowrap;
          background: #000000;
          color: #F4F4F9;
          border: 1px solid rgba(88,111,124,0.25);
        }

        @media (max-width: 560px) {
          .ach-inner   { padding: 0 1.4rem; }
          .ach-section { padding: 5rem 0; }
          .ach-card    { flex-wrap: wrap; }
          .ach-tag     { align-self: flex-start; }
        }
      `}</style>

      <section id="achievements" className="ach-section">
        <div className="ach-inner">

          <p className="ach-eyebrow">Achievements</p>
          <h2 className="ach-title">
            Proud <span>Moments</span>
          </h2>

          <div className="ach-list">
            {LIST.map((a, i) => (
              <div key={i} className="ach-card">
                <div className="ach-icon">{a.icon}</div>
                <p className="ach-text">{a.text}</p>
                <span className="ach-tag">{a.tag}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}