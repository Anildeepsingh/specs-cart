import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Glasses from "./component/glasses/Glasses";
import SunGlasses from "./component/sunglasses/SunGlasses";
import EyeTest from "./component/eye-test/EyeTest";
import Blogs from "./component/blogs/Blogs";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
// import Feed from "./component/home/feeds/Feed";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/sunglasses" element={<SunGlasses />} />
        <Route path="/eyetest" element={<EyeTest />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      {/* <Feed /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
