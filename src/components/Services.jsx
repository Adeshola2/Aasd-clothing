const services = [
  {
    icon: "bi-truck",
    title: "Fast Delivery",
    text: "Get your orders delivered quickly across selected Nigerian locations."
  },
  {
    icon: "bi-shield-check",
    title: "Secure Shopping",
    text: "Shop confidently with a simple and secure ordering experience."
  },
  {
    icon: "bi-stars",
    title: "Quality Products",
    text: "We carefully select stylish pieces made for comfort and everyday use."
  },
  {
    icon: "bi-headset",
    title: "Customer Support",
    text: "Our team is available to help you with orders and product questions."
  }
];

function Services() {

  return (
    <section
      id="services"
      className="section-padding services-section"
    >

      <div className="container">

        <div className="text-center section-heading">

          <span className="section-label">
            WHY AASD
          </span>

          <h2>
            More than just
            <span> clothes.</span>
          </h2>

          <p>
            We are committed to making your shopping
            experience simple, secure and enjoyable.
          </p>

        </div>

        <div className="row g-4 mt-3">

          {services.map(service => (

            <div
              className="col-6 col-lg-3"
              key={service.title}
            >

              <div className="service-card">

                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;