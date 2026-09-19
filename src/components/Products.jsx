import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({
  onAddToCart,
  onViewProduct,
  limit
}) {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Casual Wear",
    "Office Wear",
    "Party Wear",
    "Footwear"
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <section
      id="products"
      className="section-padding products-section"
    >
      <div className="container">

        <div className="text-center section-heading">

          <span className="section-label">
            OUR COLLECTION
          </span>

          <h2>
            Shop our
            <span> latest styles</span>
          </h2>

          <p>
            Quality fashion pieces carefully selected
            for modern Nigerian lifestyles.
          </p>

        </div>

        <div className="category-filter">

          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="row g-4 mt-2">

          {displayedProducts.map((product) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            </div>
          ))}

        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-5">

            <i className="bi bi-box-seam fs-1"></i>

            <h3 className="mt-3">
              No products found
            </h3>

            <p>
              Try selecting another category.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default Products;
