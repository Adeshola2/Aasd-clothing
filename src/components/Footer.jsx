function Footer({ navigate }) {

  return (
    <footer className="footer">

      <div className="container">

        <div className="row g-4">

          <div className="col-lg-4">

            <button
              className="footer-logo"
              onClick={() => navigate("home")}
            >
              A<span>asd</span>
            </button>

            <p>
              Modern Nigerian fashion designed for
              every lifestyle, occasion and personality.
            </p>

            <div className="social-links">

              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>

          </div>

          <div className="col-6 col-lg-2">

            <h3>Shop</h3>

            <ul>
              <li>
                <button onClick={() => navigate("products")}>
                  All Products
                </button>
              </li>

              <li>
                <button onClick={() => navigate("products")}>
                  Casual Wear
                </button>
              </li>

              <li>
                <button onClick={() => navigate("products")}>
                  Office Wear
                </button>
              </li>

              <li>
                <button onClick={() => navigate("products")}>
                  Party Wear
                </button>
              </li>
            </ul>

          </div>

          <div className="col-6 col-lg-2">

            <h3>Company</h3>

            <ul>

              <li>
                <a href="#about">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <a href="#reviews">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          <div className="col-lg-4">

            <h3>Stay Updated</h3>

            <p>
              Subscribe for new arrivals and special
              offers.
            </p>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
              />

              <button aria-label="Subscribe">
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Aasd Clothing.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;