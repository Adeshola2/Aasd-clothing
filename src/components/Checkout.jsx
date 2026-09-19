import { useState } from "react";
import { clearCart, getCartTotal } from "../utils/cart";

function Checkout({ cart, navigate }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [error, setError] = useState("");

  const total = getCartTotal();

  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.address.trim()
    ) {

      setError(
        "Please complete all required fields."
      );

      return;
    }

    const order = {
      ...form,
      cart,
      total,
      date: new Date().toISOString()
    };

    localStorage.setItem(
      "aasd_last_order",
      JSON.stringify(order)
    );

    clearCart();

    alert(
      "Order submitted successfully! Aasd will contact you shortly."
    );

    navigate("home");
  };

  if (cart.length === 0) {

    return (
      <section className="section-padding">
        <div className="container text-center">

          <h1>Your cart is empty</h1>

          <button
            className="btn btn-primary-custom mt-3"
            onClick={() => navigate("products")}
          >
            Shop Now
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="section-padding checkout-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            CHECKOUT
          </span>

          <h1>
            Complete your <span>order</span>
          </h1>

        </div>

        <div className="row g-5">

          <div className="col-lg-7">

            <form
              className="checkout-form"
              onSubmit={handleSubmit}
              noValidate
            >

              <h2>Shipping Information</h2>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <div className="mb-3">

                <label htmlFor="checkout-name">
                  Full Name *
                </label>

                <input
                  id="checkout-name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-3">

                <label htmlFor="checkout-phone">
                  Phone Number *
                </label>

                <input
                  id="checkout-phone"
                  name="phone"
                  type="tel"
                  className="form-control"
                  placeholder="08012345678"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-3">

                <label htmlFor="checkout-address">
                  Delivery Address *
                </label>

                <textarea
                  id="checkout-address"
                  name="address"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your complete delivery address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary-custom w-100"
              >
                Place Order
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

            </form>

          </div>

          <div className="col-lg-5">

            <div className="checkout-summary">

              <h2>Your Order</h2>

              {cart.map(item => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>

                    <p>
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <strong>
                    ₦{(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </strong>

                </div>

              ))}

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ₦{total.toLocaleString()}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;