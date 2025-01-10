import React from 'react'

const ContactForm = () => {
  return (
    <>
      <section className="contact-section mt-5 pt-3 pb-5">
  <div className="contact-area default-padding">
    <div className="container mt-5">
      <div className="contact-box">
        <div className="row">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6926708693522!2d80.23111577460415!3d12.99149811444267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f29aa9a61f%3A0x24ef264085e6a094!2sIndian%20Institute%20Of%20Technology%E2%80%93Madras%20(IIT%E2%80%93Madras)!5e0!3m2!1sen!2sin!4v1734679316351!5m2!1sen!2sin"
              style={{
                border: 0,
                display: "block !important",
                width: "100% !important",
                height: "100% !important",
                borderRadius: "0px !important"
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing the location of the IIT madrash"
            />
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f55-p88-o1"
                lang="en-US"
                dir="ltr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true" />
                  <ul />
                </div>
                <form
                  action="send-email.php"
                  method="POST"
                  className="wpcf7-form init"
                  data-status="init"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="your-name">Name:</label>
                        <input
                          type="text"
                          name="your-name"
                          id="your-name"
                          defaultValue=""
                          className="form-control"
                          required=""
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          defaultValue=""
                          className="form-control"
                          required=""
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          defaultValue=""
                          className="form-control"
                          required=""
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          defaultValue=""
                          className="form-control"
                          required=""
                          placeholder="Enter the subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          required=""
                          placeholder="Please describe what you need."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        name="submit"
                        className="arc-btn--base arc-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactForm
