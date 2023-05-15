import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./LayoutHeader.scss";
import { Icon, Button } from "../../../components/ui";

const LayoutHeader = () => {
  return (
    <>
      <header className="layout-header">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" style={{ height: '70px', padding:'0px'}} /> 
            <span>SecureFin</span>
          </div>
          <div className="layout-header__desktop">
            <ul className="ul-items">
              <li className="li-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/pricing">Pricing</Link>

              </li>

            </ul>
          </div>

          <div className="auth-nav">
            <Link to="/login"className="auth-nav__link">Log in</Link>
            <Button
            text= "Get Started"
            className= "auth-nav__btn"
            />
          </div>

        </nav>
        <div className="layout-header__mobile">
          <Icon icon="menu" className="layout-header--icon" />
        </div>
      </header>
    </>
  );
};

export default LayoutHeader;
