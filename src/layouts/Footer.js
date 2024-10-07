import Link from "next/link";

const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="footer-description">
            <Link href="/">
                <img className="mainLogoBox" src="/assets/img/DilSeKhanaLogo.png" />
              </Link>
              <h2>The Best Restaurants in Your Home</h2>
              <p>
                Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
                lacus luctus accumsan tortor posuere. Tempus egestas sed sed
                risus pretium quam.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="menu">
              <h4>Menu</h4>
              <ul className="footer-menu">
                <li>
                  <Link href="/">
                    home
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    about us
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="restaurants">
                    Restaurants
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="contacts">
                    Contacts
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="menu contacts">
              <h4>Contacts</h4>
              <div className="footer-location">
                <i className="fa-solid fa-location-dot" />
                <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
              </div>
              <a href="mailto:quickeat@mail.net">
                <i className="fa-solid fa-envelope" />
                quickeat@mail.net
              </a>
              <a href="callto:+14253261627">
                <i className="fa-solid fa-phone" />
                +1 425 326 16 27
              </a>
            </div>
            <ul className="social-media">
              <li>
                {" "}
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-two gap no-bottom">
          <p>Copyright © 2023. QuickEat. All rights reserved.</p>
          <div className="privacy">
            {" "}
            <a href="#">Privacy Policy</a> <a href="#">Terms &amp; Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
