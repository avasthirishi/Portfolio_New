import React from 'react';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400-italic.css";
import '../index.css';
const education = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'CGC Landran, Punjab',
    university: 'I.K.G. Punjab Technical University, Kapurthala, Jalandhar',
    period: '2021 – 2025', type: 'Graduation', grade: '7.77 CGPA',
    points: [
      'Completed a 4-year undergraduate program in Information Technology.',
      'Gained strong fundamentals in Data Structures, Algorithms, DBMS, OS, and Networking.',
      'Worked on full-stack web projects using MERN stack and PHP during coursework.',
      'Mandatory 6-month industry internship fulfilled at Hopping Minds Technologies, Chandigarh.',
    ],
    tags: ['B.Tech', 'IT', 'MERN', 'DBMS', 'IKG PTU'],
    document: '/B.Tech_certificate.pdf', documentLabel: 'View Degree ↗',
  },
  {
    degree: 'Intermediate (10+2)',
    institution: 'Ram Lakhan Singh Yadav College, Bakhtiarpur, Bihar',
    university: 'Specialisation: Physics, Chemistry & Mathematics',
    period: '2018 – 2020', type: 'Intermediate', grade: '66.32%',
    points: [
      'Completed 10+2 with PCM stream (Physics, Chemistry & Mathematics).',
      'Built analytical and problem-solving skills that form the base of engineering thinking.',
      'Developed a strong foundation in mathematics essential for programming and algorithms.',
    ],
    tags: ['PCM', 'Physics', 'Chemistry', 'Mathematics', 'Bihar Board'],
    document: '/12th_certificate.pdf', documentLabel: 'View Certificate ↗',
  },
  {
    degree: 'Matriculation (10th)',
    institution: 'Satyam International School, Bariya, Patna, Bihar',
    university: '',
    period: '2017 – 2018', type: 'Matriculation', grade: '64.80%',
    points: [
      'Completed secondary education with a focus on core sciences and mathematics.',
      'Developed disciplined study habits and foundational knowledge across all subjects.',
    ],
    tags: ['10th', 'Secondary', 'Bihar Board', 'Sciences'],
    document: '/10th_marksheet.pdf', documentLabel: 'View Certificate ↗',
  },
  {
    degree: 'Primary & Upper Primary (Classes 1–8)',
    institution: 'Saraswati Vidya Mandir, Khushrupur, Patna, Bihar',
    university: '',
    period: '2010 – 2016', type: 'School', grade: '85%',
    points: [
      'Completed primary and upper-primary education with strong academic performance.',
      'Achieved 85% overall — consistently among top performers in class.',
      'Built a disciplined learning mindset and love for mathematics from an early stage.',
    ],
    tags: ['Primary', 'Upper Primary', 'School'],
    document: null, documentLabel: null,
  },
];

export default function Education() {
  return (
    <>
      <style>{`
        .edu-section {
          padding: 7rem 0;
          background: #586F7C;
        }
        .edu-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .edu-eyebrow {
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
        .edu-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.18);
        }
        .edu-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 4rem 0;
        }
        .edu-title span { color: #000000; font-weight: 600; }

        /* Timeline */
        .edu-timeline { position: relative; }
        .edu-timeline-line {
          position: absolute;
          left: 20px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, #586F7C, transparent);
        }
        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .edu-item {
          display: flex;
          gap: 2.5rem;
          padding-left: 60px;
          position: relative;
        }
        .edu-dot {
          position: absolute;
          left: 13px; top: 16px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #2F4550;
          border: 2px solid #586F7C;
          box-shadow: 0 0 10px rgba(88,111,124,0.5);
          z-index: 1;
        }
        .edu-card {
          flex: 1;
          background: #2F4550;
          border: 1px solid #1e1e1e;
          border-radius: 14px;
          padding: 1.75rem;
          transition: all 0.25s;
        }
        .edu-card:hover {
          border-color: #586F7C;
          transform: translateX(4px);
          box-shadow: 0 8px 32px rgba(88,111,124,0.1);
        }
        .edu-card-head {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1rem;
        }
        .edu-degree {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #000000;
          margin-bottom: 4px;
        }
        .edu-institution {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #586F7C;
          margin-bottom: 3px;
        }
        .edu-university {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        .edu-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .edu-period {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        .edu-type-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 3px 10px;
          border-radius: 999px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(88,111,124,0.15);
          color: #8fa8b5;
          border: 1px solid rgba(88,111,124,0.3);
        }
        .edu-grade-badge {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.45);
          border: 1px solid #2a2a2a;
        }
        .edu-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1rem;
        }
        .edu-points li {
          display: flex;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #F4F4F9;
          line-height: 1.65;
        }
        .edu-points li::before {
          content: '▸';
          color: #F4F4F9;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .edu-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .edu-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .edu-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 999px;
          background: #000000;
          color: #F4F4F9;
          border: 1px solid #2a2a2a;
        }
        .edu-doc-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 14px;
          border-radius: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          text-decoration: none;
          background: #586F7C;
          color: #ffffff;
          border: none;
          transition: all 0.2s;
        }
        .edu-doc-btn:hover {
          background: #6b8290;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(88,111,124,0.3);
        }

        @media (max-width: 700px) {
          .edu-item  { padding-left: 48px; gap: 1.5rem; }
          .edu-inner { padding: 0 1.4rem; }
          .edu-section { padding: 5rem 0; }
          .edu-card { padding: 1.25rem; }
        }
      `}</style>

      <section id="education" className="edu-section">
        <div className="edu-inner">

          <p className="edu-eyebrow">Education</p>
          <h2 className="edu-title">
            Where I <span>Studied</span>
          </h2>

          <div className="edu-timeline">
            <div className="edu-timeline-line" />
            <div className="edu-list">
              {education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-card">
                    <div className="edu-card-head">
                      <div>
                        <div className="edu-degree">{edu.degree}</div>
                        <div className="edu-institution">@ {edu.institution}</div>
                        {edu.university && (
                          <div className="edu-university">{edu.university}</div>
                        )}
                      </div>
                      <div className="edu-meta">
                        <span className="edu-period">{edu.period}</span>
                        <span className="edu-type-badge">{edu.type}</span>
                        <span className="edu-grade-badge">🎓 {edu.grade}</span>
                      </div>
                    </div>

                    <ul className="edu-points">
                      {edu.points.map((pt, k) => (
                        <li key={k}>{pt}</li>
                      ))}
                    </ul>

                    <div className="edu-footer">
                      <div className="edu-tags">
                        {edu.tags.map(t => (
                          <span key={t} className="edu-tag">{t}</span>
                        ))}
                      </div>
                      {edu.document && edu.documentLabel && (
                        <a href={edu.document} target="_blank" rel="noopener noreferrer"
                          className="edu-doc-btn">
                          {edu.documentLabel}
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