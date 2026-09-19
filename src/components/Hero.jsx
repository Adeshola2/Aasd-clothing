import { useEffect, useState } from "react";

function Hero({ navigate }) {
  const heroImages = [
    {
      src: "/images/hero/02-office-model.jpg",
      alt: "Aasd office fashion",
    },
    {
      src: "/images/hero/03-mens-model.jpg",
      alt: "Aasd casual fashion",
    },
    {
      src: "/images/hero/04-party-model.jpg",
      alt: "Aasd party fashion",
    },
    {
      src: "/images/hero/05-casual-model.jpg",
      alt: "Aasd fashion collection",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        (prev + 1) % heroImages.length
      );
    }, 20000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Previous image
  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  // Next image
  const nextImage = () => {
    setCurrentImage((prev) =>
      (prev + 1) % heroImages.length
    );
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Hero Text */}
          <div className="col-lg-6 hero-content">

            <span className="hero-tag">
              NIGERIAN FASHION BRAND
            </span>

            <h1>
              Style
              <br />
              <span>For Every You</span>
            </h1>

            <p>
              Discover modern fashion designed for
              your lifestyle. From casual outfits and
              office essentials to party looks,
              Aasd has something for every occasion.
            </p>

            <div className="hero-buttons">

              <button
                className="btn btn-primary-custom"
                onClick={() => navigate("products")}
              >
                Shop Now
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

              <a
                href="#about"
                className="btn btn-outline-light-custom"
              >
                Discover Aasd
              </a>

            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="col-lg-6 hero-image-wrapper">

            <div className="hero-slider">

              <img
                key={heroImages[currentImage].src}
                src={heroImages[currentImage].src}
                alt={heroImages[currentImage].alt}
                className="hero-image"
              />

              {/* Previous Button */}
              <button
                className="hero-slider-btn hero-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              {/* Next Button */}
              <button
                className="hero-slider-btn hero-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              {/* Indicators */}
              <div className="hero-indicators">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`hero-indicator ${
                      currentImage === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show image ${index + 1}`}
                  ></button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;