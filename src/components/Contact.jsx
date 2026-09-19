import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    text: ""
  });

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !message.name ||
      !message.email ||
      !message.text
    ) {

      alert(
        "Please complete all contact form fields."
      );

      return;
    }

    alert(
      "Thank you! Your message has been received."
    );

    setMessage({
      name: "",
      email: "",
      text: ""
    });

  };

  return (
    <section
      id="contact"
      className="section-padding contact-section"
    >

      <div className="container">

        <div className="row g-5">

          <div className="col-lg-5">

            <span className="section-label">
              CONTACT US
            </span>

            <h2>
              Let's talk about
              <span> fashion.</span>
            </h2>

            <p>
              Have questions about our products,
              delivery or your order? Our team is
              ready to help.
            </p>

            <div className="contact-details">

              <div>
                <i className="bi bi-telephone"></i>

                <div>
                  <small>Call us</small>
                  <strong>+234 800 000 0000</strong>
                </div>

              </div>

              <div>
                <i className="bi bi-envelope"></i>

                <div>
                  <small>Email</small>
                  <strong>hello@aasd.com</strong>
                </div>

              </div>

              <div>
                <i className="bi bi-geo-alt"></i>

                <div>
                  <small>Location</small>
                  <strong>Lagos, Nigeria</strong>
                </div>

              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="mb-3">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  className="form-control"
                  value={message.name}
                  onChange={e =>
                    setMessage({
                      ...message,
                      name: e.target.value
                    })
                  }
                  required
                />

              </div>

              <div className="mb-3">

                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  className="form-control"
                  value={message.email}
                  onChange={e =>
                    setMessage({
                      ...message,
                      email: e.target.value
                    })
                  }
                  required
                />

              </div>

              <div className="mb-3">

                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  className="form-control"
                  rows="6"
                  value={message.text}
                  onChange={e =>
                    setMessage({
                      ...message,
                      text: e.target.value
                    })
                  }
                  required
                ></textarea>

              </div>

              <button
                className="btn btn-primary-custom"
                type="submit"
              >
                Send Message
                <i className="bi bi-send ms-2"></i>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;