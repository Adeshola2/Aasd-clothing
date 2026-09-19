function Navbar({ navigate, cartCount }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">

        <button
          className="navbar-brand logo-btn"
          onClick={() => navigate("home")}
        >
          A<span>asd</span>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => navigate("home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => navigate("products")}
              >
                Shop
              </button>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#reviews"
              >
                Reviews
              </a>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => navigate("contact")}
              >
                Contact
              </button>
            </li>

            <li className="nav-item ms-lg-3">

              <button
                className="cart-button"
                onClick={() => navigate("cart")}
                aria-label="Open shopping cart"
              >

                <i className="bi bi-cart3"></i>

                <span className="cart-count">
                  {cartCount}
                </span>

              </button>

            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;