import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          If you have any other <strong>questions</strong>, or <strong>feedback</strong> regarding this year's phishing training, please send them in using the form below.
        </p>
        <form netlify>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
