import { Route, Routes /*BrowserRouter as Router*/ } from 'react-router-dom';

import About from "./components/Main/About/About";
import Pricing from "./components/Main/Pricing/Pricing";
import Contact from "./components/Main/Contact/Contact";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Home from './components/Main/Home/Home';
import Landing from './pages/Landing/Landing';


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element= {<Landing />} />
                <Route path="/home" element= {<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};
export default AppRoutes;