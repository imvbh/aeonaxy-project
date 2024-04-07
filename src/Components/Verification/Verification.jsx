import React from "react";
import "./Verification.css";
import { useNavigate } from "react-router-dom";


const Verification = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="nav">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/615px-Dribbble_Text_Logo_Script.svg.png" alt="" onClick={() => navigate("/")} />
        <a href="/">Inspiration</a>
        <a href="/">Find Work</a>
        <a href="/">Learn Design</a>
        <a href="/">Go Pro</a>
        <a href="/">Hire Designer</a>
        <div className="nav-right">
          <input
            className="nav-search"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <img src="" alt="" />
          <button className="nav-button">Upload</button>
        </div>
      </div>
      <div className="verify-body">
        <h1>Please verify your email...</h1>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/email-6129868-5036164.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          animi? Ad, fugit.
        </p>
        <b>abc123@xyz.com</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          laborum eveniet in, repellat aliquid vitae natus! Delectus expedita
          autem libero beatae, fugiat quia accusantium.
        </p>
        <p>Wrong email address? Change it.</p>
      </div>
      <footer class="footer">
  <div class="footer__addr">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/615px-Dribbble_Text_Logo_Script.svg.png" alt="" class="footer__logo"/>
        
    <h2>Contact</h2>
    
    <div className="address">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus dignissimos amet ipsa quibusdam nostrum perspiciatis omnis, recusandae praesentium modi.
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </div>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <b class="nav__title">Media</b>

      <ul class="nav__ul">
        <li>
          <a href="/">Online</a>
        </li>

        <li>
          <a href="/">Print</a>
        </li>
            
        <li>
          <a href="/">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <b class="nav__title">Technology</b>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="/">Hardware Design</a>
        </li>
        
        <li>
          <a href="/">Software Design</a>
        </li>
        
        <li>
          <a href="/">Digital Signage</a>
        </li>
        
        <li>
          <a href="/">Automation</a>
        </li>
        
        <li>
          <a href="/">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="/">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        
        <li>
          <a href="/">Terms of Use</a>
        </li>
        
        <li>
          <a href="/">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2020 Dribbble. All rights reserved.</p>
    
    <div class="legal__links">
      <span><b>202,154</b> shots Dribbbled</span>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Verification;
