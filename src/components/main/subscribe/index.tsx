const Subscribe = () => {
  // Handle subscription form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Subscribe logic would go here
    // Toggle thank you message
  };

  return (
    <section id="subscribe">
      <div className="container">
        <h2 className="section-title">
          Subscribe to Our <br /> Newsletter
        </h2>
        <div className="section-subtitle">Be the first to receive the latest updates.</div>
        <form className="subscribe__form" onSubmit={handleSubmit}>
          <div>
            <input
              id="subscribe__input-email"
              type="email"
              required
              className="subscribe__input-email"
              placeholder="Your email"
            />
          </div>
          <button type="submit" className="btn-blue">
            Subscribe Now
          </button>
          <div className="thank_you d-none">Thank you!</div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
