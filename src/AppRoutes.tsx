import { Route, Routes } from "react-router-dom";
import About from "./components/Main/About/About";
import Home from "./components/Main/Home/Home";
import Pricing from "./components/Main/Pricing/Pricing";
import Features from "./components/Main/Features/Features";
import Faq from "./components/Main/Home/AskQuestion/Faq";
import Register from "./pages/Auth/Register/Register";

const AppRoutes = () => {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default AppRoutes;
