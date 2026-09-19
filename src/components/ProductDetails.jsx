import { useState } from "react";

function ProductDetails({
  product,
  onAddToCart,
  navigate
}) {

  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] =
    useState(product.sizes[0]);

  const increase = () => {
    setQuantity(previous => previous + 1);
  };

  const decrease = () => {
    setQuantity(previous =>
      Math.max(1, previous - 1)
    );
  };

  const addProduct = () => {

    onAddToCart({
      ...product,
      selectedSize
    });

  };

  return (
    <section className="section-padding product-detail">

      <div className="container">

        <button
          className="back-button"
          onClick={() => navigate("products")}
        >
          <i className="bi bi-arrow-left"></i>
          Back to Shop
        </button>

        <div className="row g-5 mt-3">

          <div className="col-lg-6">

            <div className="detail-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

          </div>

          <div className="col-lg-6">

            <span className="product-category">
              {product.category}
            </span>

            <h1 className="detail-title">
              {product.name}
            </h1>

            <div className="rating detail-rating">

              <span>
                {"★".repeat(Math.round(product.rating))}
              </span>

              <span>
                {product.rating}
              </span>

              <small>
                {product.reviews} customer reviews
              </small>

            </div>

            <h2 className="detail-price">
              ₦{product.price.toLocaleString()}
            </h2>

            <p className="detail-description">
              {product.description}
            </p>

            <div className="size-selection">

              <h5>Choose Size</h5>

              <div className="sizes">

                {product.sizes.map(size => (

                  <button
                    key={size}
                    className={
                      selectedSize === size
                        ? "size-btn selected"
                        : "size-btn"
                    }
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            <div className="quantity-section">

              <h5>Quantity</h5>

              <div className="quantity-control">

                <button onClick={decrease}>
                  −
                </button>

                <span>{quantity}</span>

                <button onClick={increase}>
                  +
                </button>

              </div>

            </div>

            <div className="detail-actions">

              <button
                className="btn btn-primary-custom flex-grow-1"
                onClick={addProduct}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Add to Cart
              </button>

              <button
                className="btn btn-dark flex-grow-1"
                onClick={() => {
                  addProduct();
                  navigate("cart");
                }}
              >
                Buy Now
              </button>

            </div>

            <div className="product-features">

              <div>
                <i className="bi bi-truck"></i>
                <span>Fast Delivery</span>
              </div>

              <div>
                <i className="bi bi-shield-check"></i>
                <span>Secure Shopping</span>
              </div>

              <div>
                <i className="bi bi-arrow-repeat"></i>
                <span>Easy Returns</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;