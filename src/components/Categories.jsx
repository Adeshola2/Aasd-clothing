const categories = [
  {
    name: "Casual Wear",
    icon: "bi-person",
    description: "Everyday looks"
  },
  {
    name: "Office Wear",
    icon: "bi-briefcase",
    description: "Professional style"
  },
  {
    name: "Party Wear",
    icon: "bi-stars",
    description: "Stand out"
  },
  {
    name: "Footwear",
    icon: "bi-bootstrap",
    description: "Complete your look"
  }
];

function Categories({ navigate }) {

  return (
    <section className="section-padding category-section">

      <div className="container">

        <div className="text-center section-heading">

          <span className="section-label">
            SHOP BY CATEGORY
          </span>

          <h2>
            Find your perfect
            <span> style</span>
          </h2>

          <p>
            Explore our collections designed for
            every mood, occasion and lifestyle.
          </p>

        </div>

        <div className="row g-4 mt-3">

          {categories.map((category) => (

            <div
              className="col-6 col-lg-3"
              key={category.name}
            >

              <button
                className="category-card"
                onClick={() => navigate("products")}
              >

                <div className="category-icon">
                  <i className={`bi ${category.icon}`}></i>
                </div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span>
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </span>

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;