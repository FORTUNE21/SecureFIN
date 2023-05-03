import { Route } from 'react-router-dom';

import About from "./components/Main/About/About";
import Home from "./components/Main/Home/Home";
import Features from "./components/Main/Features/Features";
import Pricing from "./components/Main/Pricing/Pricing";
import Contact from "./components/Main/Contact/Contact";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

const AppRoutes = () => {
    return (
        <>
        {/*<Routes>*/}
            <Route path="/" element= {<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="./pricing" element={<Pricing />} />
            <Route path="./login" element={<Login />} />
            <Route path="./signup" element={<Signup />} />
            <Route path="./register" element={<Register />} />
        {/*</Routes>*/}
        </>
    );
};
export default AppRoutes;