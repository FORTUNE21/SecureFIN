import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./LayoutHeader.scss";
import { Icon } from "../../../components/ui";

const LayoutHeader = () => {
  return (
    <>
      <header className="layout-header">
        <div className="logo">
          <img src={logo} alt="logo" style={{height: '60px'}}/>
        </div>
        <div className="layout-header__desktop">
          <nav>
            <ul className="ul-items">
              <li className="li-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/features">Features</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className = "li-items__auth">
                <Link to="/login">Log in</Link>
                <Link to="/register">Get Started</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="layout-header__mobile">
          <Icon icon="menu" className="layout-header--icon" />
        </div>
      </header>
    </>
  );
};

export default LayoutHeader;
