import React from "react";
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="image-left">
        <span>Discover the world's Top Designers & Creatives</span>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/laptop-maintenance-4768951-3977754.png"
          alt=""
        />
        <p>
          Art by{" "}
          <a href="https://cdn3d.iconscout.com/3d/premium/thumb/laptop-maintenance-4768951-3977754.png">
            Google
          </a>
        </p>
      </div>
      <div className="form-wrapper">
        <div className="signin">
          Already a member? <a href="http:/">Sign In</a>
        </div>
        <form action="">
          <h1>Sign up to Dribbble</h1>
          <div className="subdiv">
            <div className="input name">
              <span>Name</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input name">
              <span>Username</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Username"
                required
              />
            </div>
          </div>
          <div className="input">
            Email
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input">
            Password
            <input type="password" name="" id="" placeholder="6+ characters" />
          </div>
          <div className="terms">
            <label className="container">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                <a href="/">Terms of service</a>, <a href="/">Privacy Policy</a>{" "}
                and Our default <a href="/">Notifcation Policy</a>
              </span>
              <input type="checkbox" required />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="submit">
            <button type="submit" onClick={() => navigate("/create")}>
              Create Account
            </button>
          </div>
          <div className="subbutton">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <span>
              <a href="/">Terms of service</a> & <a href="/">Privacy Policy</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
