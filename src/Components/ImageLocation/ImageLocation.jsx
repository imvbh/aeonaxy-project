import React from "react";
import "./ImageLocation.css";
import { useNavigate } from "react-router-dom";


const ImageLocation = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapp">
      <div className="title">
        <h1>Welcome! Let's Create Your Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="image-selector">
        <b>Add an avatar</b>
        <div className="image-parent">
          <div className="circle"></div>
          <div className="selector">
            <label className="upload-file">
              Choose Image
              <input type="file" name="" id="" />
            </label>
            <p>{">"} Or choose one of our defaults</p>
          </div>
        </div>
      </div>
      <div className="location-selector">
        <b>Add your location</b>
        <input
          className="location-input"
          type="text"
          name=""
          id=""
          placeholder="Enter a location"
        />
      </div>
      <div className="bottom">
        <button className="button" onClick={() => navigate("/select")}>Next</button>
        <p className="return">
          or press <a href="/">RETURN</a>
        </p>
      </div>
    </div>
  );
};

export default ImageLocation;
