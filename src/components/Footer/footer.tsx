import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">S</div>
          <p>© 2024 Sevaxa. All rights reserved</p>
        </div>

        <div className="footer__column">
          <h4>CUSTOMER CARE</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="footer__column">
          <h4>CONNECT</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>

        <div className="footer__column">
          <h4>ADDRESS</h4>
          <p>Lorem Ipsum 129b,</p>
          <p>Stockholm</p>
        </div>
      </div>
    </footer>
  );
}