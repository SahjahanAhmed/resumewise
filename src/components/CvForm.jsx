import React, { useRef, useState } from "react";

import "./cvform.css";
import Cv from "./Cv";
const CvForm = ({ setShowNavbar }) => {
  //refs
  const educationsRef = useRef();

  const [educationlength, setEducationLength] = useState(1);

  const [showForm, setShowForm] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [cv, setCv] = useState({});

  // input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [email, setemail] = useState("");
  const [adress, setAdress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [description, setDescription] = useState("");
  const [education, setEducation] = useState({
    eduOne: "",
    eduTwo: "",
    eduThree: "",
  });
  const [experience, setExperience] = useState("");

  //handle genarate resume
  const handleGenarateresume = async () => {
    if (
      name == "" ||
      phone == "" ||
      email == "" ||
      adress == "" ||
      facebook == "" ||
      linkedin == "" ||
      instagram == "" ||
      description == "" ||
      education == "" ||
      experience == ""
    ) {
      alert("All field required, Please fillup all fields");
      return;
    }
    if (description.length < 50) {
      alert("Too short description");
      return;
    } else if (experience.length < 50) {
      alert("Too short experience section");
      return;
    }

    setShowForm(false);
    setShowNavbar(false);
    setShowCv(true);

    setCv({
      name,
      phone,
      email,
      img,
      adress,
      facebook,
      instagram,
      linkedin,
      description,
      education,
      experience,
    });
  };

  return (
    <>
      <button
        className="create-resume-btn"
        onClick={(e) => {
          setShowForm(true);
          e.target.style.display = "none";
        }}
      >
        Create Resume
      </button>

      {showForm && (
        <div>
          <div className="container">
            {/* basic information */}
            <div className=" left">
              <h3>Basic information</h3>
              <div className="inputs">
                <input
                  type="text"
                  value={img}
                  placeholder="enter a image address or link..."
                  onChange={(e) => setImg(e.target.value)}
                />
                <input
                  type="text"
                  value={name}
                  placeholder="Enter name here"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={phone}
                  placeholder="Enter phone number here"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="text"
                  value={adress}
                  placeholder="Enter adress here"
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <div className="socials">
                <h3>Social links</h3>
                <div>
                  <input
                    type="text"
                    value={facebook}
                    placeholder="enter facebook link"
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                  <input
                    type="text"
                    value={linkedin}
                    placeholder="enter linkedin link"
                    onChange={(e) => setlinkedin(e.target.value)}
                  />
                  <input
                    type="text"
                    value={instagram}
                    placeholder="enter instagram link"
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* description, education, experience */}
            <div className="right">
              <div className="describe">
                <h3>Describe yourself</h3>
                <textarea
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="education">
                <h3>Education</h3>
              </div>

              <div className="educations" ref={educationsRef}>
                <input
                  onChange={(e) => {
                    education.eduOne = e.target.value;
                  }}
                  type="text"
                  className="education"
                  placeholder="Add education"
                />
                {educationlength >= 2 && (
                  <input
                    onChange={(e) => {
                      education.eduTwo = e.target.value;
                    }}
                    type="text"
                    className="education"
                    placeholder="Add education"
                  />
                )}
                {educationlength >= 3 && (
                  <input
                    onChange={(e) => {
                      education.eduThree = e.target.value;
                    }}
                    type="text"
                    className="education"
                    placeholder="Add education"
                  />
                )}
                <button
                  onClick={() => setEducationLength(educationlength + 1)}
                  className="add-education-btn"
                >
                  Add
                </button>
              </div>
              <div className="experience">
                <h3>Experience</h3>
                <textarea
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="genarate-resume">
            <button
              className="genarate-resume-btn"
              onClick={async () => {
                handleGenarateresume();
              }}
            >
              Genarate Resume
            </button>
            <button
              className="reset-btn"
              onClick={() => window.location.reload()}
            >
              Reset
            </button>
          </div>
        </div>
      )}
      {showCv && <Cv cv={cv} setShowForm={setShowForm} setShowCv={setShowCv} />}
    </>
  );
};

export default CvForm;
