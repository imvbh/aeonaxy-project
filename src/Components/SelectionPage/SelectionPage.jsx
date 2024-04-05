import React from "react";
import "./SelectionPage.css" 

const SelectionPage = () => {
  return (
    <div className="wrapper">
      <div className="page-title">
        <h1>What brings you to Dribbble?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          sapiente.
        </p>
      </div>
      <div className="options">
        <div className="option ">
          <div className="translate"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/creativity-process-8683314-6984696.png?f=webp" alt="" />
          <div className="title">I'm a designer looking to share my work</div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sinterestor incellent experious corporis?</p>
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="option">
          <div className="translate"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/creative-note-5749659-4817944.png" alt="" />
          <div className="title">I'm looking to hire a designer</div></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consectetur. Praesentium, assumenda?</p>
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="option">
          <div className="translate"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/creative-book-8430174-6659983.png" alt="" />
          <div className="title">I'm looking for a design inspiration</div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias accusantium quasi dolor?</p>
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="bottom">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button >Finish</button>
        <p className="return">or press <a href="/">RETURN</a></p>
      </div>
    </div>
  );
};

export default SelectionPage;
