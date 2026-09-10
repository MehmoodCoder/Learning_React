function Contact() {
  return (
    <div className="page-container">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
