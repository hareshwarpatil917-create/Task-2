import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        Have a project in mind? We'd love to hear from you.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;