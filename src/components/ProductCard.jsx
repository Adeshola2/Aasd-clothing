function ProductCard({
  product,
  onAddToCart,
  onViewProduct
}) {

  return (
    <article className="product-card">

      <button
        className="product-image-button"
        onClick={() => onViewProduct(product)}
        aria-label={`View ${product.name}`}
      >

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

      </button>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="rating">

          <span>
            {"★".repeat(Math.round(product.rating))}
          </span>

          <small>
            {product.rating} ({product.reviews})
          </small>

        </div>

        <div className="product-bottom">

          <strong>
            ₦{product.price.toLocaleString()}
          </strong>

          <button
            className="add-cart-small"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <i className="bi bi-cart-plus"></i>
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;