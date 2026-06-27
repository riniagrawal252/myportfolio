import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        <div className="resume-heading">
          <span className="resume-tag">MY RESUME</span>

          <h2>
            Professional <span>Resume</span>
          </h2>

          <p>
            Explore my resume to learn more about my skills, education,
            projects, internships, certifications, and achievements.
          </p>
        </div>

        <div className="resume-buttons">

          <a
            href="/images/images1/Resume_Graphic_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn view"
          >
            📄 View Resume
          </a>

          <a
            href="/images/images1/Resume_Graphic_Designer.pdf"
            download="Rini_Agrawal_Resume.pdf"
            className="resume-btn download"
          >
            ⬇ Download Resume
          </a>

        </div>

        <div className="resume-viewer">

          <div className="viewer-header">
            <span>Resume Preview</span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <iframe
            src="/images/images1/Resume_Graphic_Designer.pdf"
            title="Resume"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default Resume;