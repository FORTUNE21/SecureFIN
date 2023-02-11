import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import "./LayoutHeader.scss";
import { Icon, Button } from "../../ui";

const LayoutHeader = () => {
  return (
    <>
      <header className="layout-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="layout-header__desktop">
          <nav>
            <ul className="ul-items">
              <li className="li-items">
                <Link to="/">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About Us</Link>
                <Link to="/faq">Faq</Link>
              </li>
              <Link to="/register">
            <Button text="Register Now" />
          </Link>
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
