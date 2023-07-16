import React, { useRef, useState } from "react";

import "./cv.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Cv = ({ cv, setShowForm, setShowCv }) => {
  const cvRef = useRef();

  //handle download resume
  const handleDownload = () => {
    html2canvas(cvRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save("invoice.pdf");
    });
  };

  return (
    <>
      <div className="cv-container">
        <div className="cv" ref={cvRef}>
          {/*displaying basic informations  */}
          <div className="left">
            <h2 className="name">{cv.name}</h2>
            {cv.img && (
              <div className="img">
                {" "}
                <img src={cv.img} alt="" />
              </div>
            )}
            <div className="phone-email">
              <p>Phone: {cv.phone}</p>
              <p>Emil: {cv.email}</p>
            </div>
            <div className="social-links">
              <a href={cv.facebook}>facebook: {cv.facebook}</a>
              <a href={cv.linkedin}>linkedin: {cv.linkedin}</a>
              <a href={cv.instagram}>instagram: {cv.instagram}</a>
            </div>
          </div>

          {/* displaying description, education, experience */}
          <div className="right">
            <div className="description">
              <h3>Description</h3>
              <p> {cv.description}</p>
            </div>
            <div className="education">
              <h3>Education</h3>
              <ul className="education-list">
                {cv.education.eduOne && (
                  <li className="education">{cv.education.eduOne} </li>
                )}
                {cv.education.eduTwo && (
                  <li className="education">{cv.education.eduTwo} </li>
                )}
                {cv.education.eduThree && (
                  <li className="education">{cv.education.eduThree} </li>
                )}
              </ul>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <p> {cv.experience}</p>
            </div>
          </div>
        </div>

        <div className="back-download">
          <button
            className="back-btn"
            onClick={(e) => {
              setShowForm(true);
              setShowCv(false);
              e.target.style.display = "none";
              setTimeout(() => {
                e.target.style.display = "block";
              }, 5000);
            }}
          >
            Back
          </button>

          <button
            className="download-btn "
            onClick={handleDownload}
            style={{ width: "80px" }}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Cv;
