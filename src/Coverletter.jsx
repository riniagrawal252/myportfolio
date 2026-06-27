import React from "react";
import "./Coverletter.css";

const Coverletter = () => {
  return (
    <section className="cover-section" id="coverletter">
      <div className="cover-container">

        <div className="cover-header">
          <h2>Cover Letter</h2>
          <p>
            Thank you for visiting my portfolio. You can view or download my
            cover letter below.
          </p>
        </div>

        <div className="button-group">
          <a
            href="/images/images1/Coverletter_Graphic_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn view-btn"
          >
            📄 View Cover Letter
          </a>

          <a
            href="/images/images1/Coverletter_Graphic_Designer.pdf"
            download="Rini_Agrawal_Coverletter.pdf"
            className="btn download-btn"
          >
            ⬇ Download Cover Letter
          </a>
        </div>

        <div className="pdf-card">
          <iframe
            src="/images/images1/Coverletter_Graphic_Designer.pdf"
            title="Cover Letter"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Coverletter;