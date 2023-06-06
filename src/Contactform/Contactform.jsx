import React from "react";

import  "./contactform.css";
import Layout from "./Layout";
const ContactForm = (className) => {
  return (
    <Layout title=" Sarvadnya || Contact">
    <div className={className}>
     
      <section>
        
        <div>
          <h2>CONTACT US</h2>
        </div>

        <div>
          <form action="https://formspree.io/f/mrgvwazj" method="POST">
            <div>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                id="username"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                autoComplete="off"
                required
              />
            </div>

            <div>
              <label htmlFor="subject"></label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                id="subject"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="textarea"></label>
              <textarea
                name="textarea"
                id="textarea"
                cols="20"
                rows="10"
                autoComplete="off"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <div className="submitbutton">
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default ContactForm;
