import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignupForm/SignupForm";
import ImageLocation from "./Components/ImageLocation/ImageLocation";
import Verification from "./Components/Verification/Verification"
import SelectionPage from "./Components/SelectionPage/SelectionPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm/>}></Route>
        <Route path="/create" element={<ImageLocation/>} />
        <Route path="/select" element={<SelectionPage/>} />
        <Route path="/verify" element={<Verification />} />

      </Routes>
    </BrowserRouter>
  );
  // <div>
  //   <SignupForm/>
  // </div>
}

export default App;
