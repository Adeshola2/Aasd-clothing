import { getCartTotal } from "../utils/cart";

function Cart({
  cart,
  onRemove,
  onUpdateQuantity,
  navigate
}) {

  const total = getCartTotal();

  return (
    <section className="section-padding cart-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            SHOPPING CART
          </span>

          <h1>
            Your <span>Cart</span>
          </h1>

        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <i className="bi bi-cart-x"></i>

            <h2>Your cart is empty</h2>

            <p>
              Looks like you haven't added anything yet.
            </p>

            <button
              className="btn btn-primary-custom"
              onClick={() => navigate("products")}
            >
              Start Shopping
            </button>

          </div>

        ) : (

          <div className="row g-4">

            <div className="col-lg-8">

              {cart.map(item => (

                <div
                  className="cart-item"
                  key={`${item.id}-${item.selectedSize || ""}`}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">

                    <span>
                      {item.category}
                    </span>

                    <h3>{item.name}</h3>

                    {item.selectedSize && (
                      <p>
                        Size: {item.selectedSize}
                      </p>
                    )}

                    <strong>
                      ₦{item.price.toLocaleString()}
                    </strong>

                  </div>

                  <div className="cart-actions">

                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="delete-button"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <i className="bi bi-trash"></i>
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="col-lg-4">

              <div className="cart-summary">

                <h2>Order Summary</h2>

                <div className="summary-line">
                  <span>Subtotal</span>
                  <strong>
                    ₦{total.toLocaleString()}
                  </strong>
                </div>

                <div className="summary-line">
                  <span>Delivery</span>
                  <strong>Calculated at checkout</strong>
                </div>

                <hr />

                <div className="summary-total">
                  <span>Total</span>
                  <strong>
                    ₦{total.toLocaleString()}
                  </strong>
                </div>

                <button
                  className="btn btn-primary-custom w-100"
                  onClick={() => navigate("checkout")}
                >
                  Proceed to Checkout
                </button>

                <button
                  className="continue-shopping"
                  onClick={() => navigate("products")}
                >
                  Continue Shopping
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Cart;