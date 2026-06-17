import NavItem from "../ui/NavItem";
import SevaxaLogo from "../../assets/sevaxa-logo.svg";

export default function Header() {
  return (
    <header
      style={{
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <img src={SevaxaLogo} alt="Sevava logotyp" />
      </div>
      <nav>
        <ul style={{ display: "flex", gap: '8px' }}>
          <NavItem title="Home" link="/" />

          <NavItem title="About" link="/" />

          <NavItem title="Contact Us" link="/" />
        </ul>
      </nav>
      <div style={{ display: "flex", gap: '8px', alignItems: "center" }}>
        <p>Log In</p>
        <button>Book a demo</button>
      </div>
    </header>
  );
}
