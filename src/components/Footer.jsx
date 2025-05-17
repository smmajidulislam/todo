import { Link } from "react-router";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Description */}
        <div>
          <p className="footer-title">WatchBuddy</p>
          <p className="footer-desc">
            WatchBuddy is your ultimate partner in entertainment and earning. We
            bring you a platform where you can watch videos that follow YouTube
            and Facebook’s community guidelines — and get rewarded for your
            time!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="footer-title">Quick Links</p>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="footer-title">Contact</p>
          <ul className="footer-contact">
            <li>
              <a
                href="mailto:smmajidulislam77@gmail.com"
                className="footer-link"
              >
                Email: smmajidulislam77@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+8801709803348" className="footer-link">
                Phone: +880 1709-803348
              </a>
            </li>
            <li>Address: Khulna, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
