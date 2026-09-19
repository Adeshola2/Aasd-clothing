const reviews = [
  {
    name: "Chinwe E.",
    location: "Lagos",
    text: "The quality is amazing and delivery was super fast. I will definitely be shopping again!",
    rating: 5
  },
  {
    name: "Tunde A.",
    location: "Abuja",
    text: "Aasd has the best styles for young adults. The customer service is excellent.",
    rating: 5
  },
  {
    name: "Temitope O.",
    location: "Ibadan",
    text: "I love the variety and affordability. Their clothes always fit perfectly.",
    rating: 5
  }
];

function Reviews() {

  return (
    <section
      id="reviews"
      className="section-padding reviews-section"
    >

      <div className="container">

        <div className="text-center section-heading">

          <span className="section-label">
            CUSTOMER REVIEWS
          </span>

          <h2>
            What our customers
            <span> say</span>
          </h2>

        </div>

        <div className="row g-4 mt-3">

          {reviews.map(review => (

            <div
              className="col-md-4"
              key={review.name}
            >

              <article className="review-card">

                <div className="review-stars">
                  {"★".repeat(review.rating)}
                </div>

                <p>
                  "{review.text}"
                </p>

                <div className="review-author">

                  <div className="avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.location}</small>
                  </div>

                </div>

              </article>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;