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
        <Route path="/aeonaxy-project/" element={<SignupForm/>}></Route>
        <Route path="/aeonaxy-project/create" element={<ImageLocation/>} />
        <Route path="/aeonaxy-project/select" element={<SelectionPage/>} />
        <Route path="/aeonaxy-project/verify" element={<Verification />} />

      </Routes>
    </BrowserRouter>
  );
  // <div>
  //   <SignupForm/>
  // </div>
}

export default App;
