function About() {

  return (
    <section
      id="about"
      className="section-padding"
    >

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <span className="section-label">
              ABOUT AASD
            </span>

            <h2>
              Fashion that fits
              <span> your lifestyle.</span>
            </h2>

            <p>
              Aasd is a Nigerian clothing brand created
              for young people who want to look confident,
              stylish and comfortable wherever they go.
            </p>

            <p>
              We bring together contemporary designs,
              quality materials and accessible prices to
              create clothing for everyday Nigerian life.
            </p>

            <div className="about-stats">

              <div>
                <strong>500+</strong>
                <span>Happy Customers</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Fashion Designs</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Customer Support</span>
              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="about-card">

              <div className="about-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h3>Our Mission</h3>

              <p>
                To make modern fashion accessible to
                young Nigerians while delivering an
                enjoyable and reliable shopping experience.
              </p>

              <hr />

              <h3>Our Vision</h3>

              <p>
                To become a trusted Nigerian fashion
                destination known for style, quality
                and excellent customer service.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;