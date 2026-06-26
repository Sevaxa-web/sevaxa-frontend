import NavItem from "../ui/NavItem";
import SevaxaLogo from "../../assets/sevaxa-logo.svg";
import BookDemoButton from "../ui/BookDemoButton";
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
        <a href="https://www.sevaxa.se/sign-in">Log In</a>
        <BookDemoButton/>
      </div>
    </header>
  );
}
