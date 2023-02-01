import "../styles/addProject.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addproject = () => {
  let [Title, setTitle] = useState("");
  let [Technology, setTechnology] = useState("");
  let [shortExp, setShortExp] = useState("");
  let [longExp, setLongExp] = useState("");
  let [Images, setImages] = useState("");
  let navigate = useNavigate();
  let handleBookSubmit = (e) => {
    e.preventDefault();
    //data to be posted
    let data = {
      Title,
      Technology,
      shortExp,
      longExp,
    };
    //posting the data to server or database
    fetch("http://localhost:5000/Safety", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("project added Added Successfully......!");
    navigate('/safety/safetyProjects');
  };
  return (
    <div className="addBooks">
      <h1>Add Your Own Project</h1>
      <div className="bookform">
        <form action="" onSubmit={handleBookSubmit}>
          <div className="title">
            <input
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter Title of Project"
              type="text"
            />
          </div>
          <div className="authors">
            <input
              value={Technology}
              onChange={(e) => setTechnology(e.target.value)}
              required
              placeholder="Enter Technology used"
              type="text"
            />
          </div>
          <div className="shortDescription">
            <textarea
              value={shortExp}
              onChange={(e) => setShortExp(e.target.value)}
              placeholder="Short Description"
              name=""
              id=""
              cols="45"
              rows="5"
            ></textarea>
          </div>
          <div className="longDescription">
            <textarea
              value={longExp}
              onChange={(e) => setLongExp(e.target.value)}
              placeholder="Long Description"
              name=""
              id=""
              cols="45"
              rows="10"
            ></textarea>
          </div>
          <div className="thumbnailUrl">
            <input
              value={Images}
              onChange={(e) => setImages(e.target.value)}
              required
              placeholder="Image Adress"
              type="text"
            />
          </div>
          <button>Add project</button>
        </form>
      </div>
    </div>
  );
};

export default Addproject;
