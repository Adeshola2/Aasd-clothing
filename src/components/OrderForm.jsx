import { useState } from "react";

function OrderForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    quantity: 1,
    address: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setForm({
      ...form,
      [name]: value
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.type ||
      !form.quantity ||
      !form.address.trim()
    ) {

      alert(
        "Please complete all fields before submitting."
      );

      return;
    }

    const existingOrders =
      JSON.parse(
        localStorage.getItem("aasd_orders")
      ) || [];

    existingOrders.push({
      ...form,
      createdAt: new Date().toISOString()
    });

    localStorage.setItem(
      "aasd_orders",
      JSON.stringify(existingOrders)
    );

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      type: "",
      quantity: 1,
      address: ""
    });

  };

  return (
    <section
      id="order"
      className="section-padding order-section"
    >

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <span className="section-label">
              QUICK ORDER
            </span>

            <h2>
              Order your
              <span> favourite style.</span>
            </h2>

            <p>
              Don't want to browse the entire store?
              Use our quick order form and tell us what
              you're looking for.
            </p>

            <div className="order-benefits">

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Easy ordering
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Fast response
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Convenient delivery
              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <form
              className="order-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {submitted && (

                <div className="alert alert-success">

                  <i className="bi bi-check-circle me-2"></i>

                  Your order request has been received.
                  We will contact you shortly.

                </div>

              )}

              <div className="row g-3">

                <div className="col-md-6">

                  <label htmlFor="customer-name">
                    Customer Name *
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="col-md-6">

                  <label htmlFor="customer-phone">
                    Phone Number *
                  </label>

                  <input
                    id="customer-phone"
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="08012345678"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10,15}"
                    required
                  />

                </div>

                <div className="col-md-6">

                  <label htmlFor="clothes-type">
                    Type of Clothes *
                  </label>

                  <select
                    id="clothes-type"
                    name="type"
                    className="form-select"
                    value={form.type}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select clothes type
                    </option>

                    <option value="Casual Wear">
                      Casual Wear
                    </option>

                    <option value="Office Wear">
                      Office Wear
                    </option>

                    <option value="Party Wear">
                      Party Wear
                    </option>

                    <option value="Footwear">
                      Footwear
                    </option>

                  </select>

                </div>

                <div className="col-md-6">

                  <label htmlFor="quantity">
                    Quantity *
                  </label>

                  <input
                    id="quantity"
                    type="number"
                    name="quantity"
                    min="1"
                    max="20"
                    className="form-control"
                    value={form.quantity}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="col-12">

                  <label htmlFor="delivery-address">
                    Delivery Address *
                  </label>

                  <textarea
                    id="delivery-address"
                    name="address"
                    className="form-control"
                    rows="4"
                    placeholder="Enter your delivery address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                <div className="col-12">

                  <button
                    type="submit"
                    className="btn btn-primary-custom w-100"
                  >
                    Submit Order
                    <i className="bi bi-send ms-2"></i>
                  </button>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OrderForm;