import React from 'react';
import './contact.css'; // Make sure this CSS file exists

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <form
        action="https://formspree.io/f/mjkwdjer"
        method="POST"
        className="contact-form"
      >
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Your Message:
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
