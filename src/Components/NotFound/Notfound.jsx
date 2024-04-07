import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return <div>Notfound
    <a href="/" onClick={() => navigate("/aeonaxy-project/")}>this page doesnt exist. Go home</a>
  </div>;
};

export default Notfound;
