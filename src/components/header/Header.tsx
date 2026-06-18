import NavItem from "../ui/NavItem";
import SevaxaLogo from "../../assets/sevaxa-logo.svg";
import ArrowSVG from '../../assets/icons/right-arrow.svg'
import "./header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src={SevaxaLogo} alt="Sevava logotyp" />
      </div>
      <nav>
        <ul>
          <NavItem title="Home" to="/" />

          <NavItem title="About" to="/about" />

          <NavItem title="Contact Us" to="/contact" />
        </ul>
      </nav>
      <div className="last-header-section">
        <p>Log In</p>
        <button className="">
          <p>
            Book a demo 
          </p>
          <img src={ArrowSVG} alt="" />
        </button>
      </div>
    </header>
  );
}
