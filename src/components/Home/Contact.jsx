import React from 'react'

const Contact = () => {
  return (
    <>
  <section className="contact-section section-padding mt-5">
  <div className="contact-area default-padding">
    <div className="container">
      <p className="text-center mb-5 heading-blue">Contact Us</p>
      <div className="contact-box">
        <div className="row">
          <div className="col-lg-5 left-info">
            <div className="content-box">
              {/* <p class="contact-title mb-4">
                You can connect with us when need help!
              </p> */}
              <div className="item">
                <div className="icon">
                  <i className="fas fa-envelope-open" />
                </div>
                <div className="info">
                  <p className="heading-contact-info mt-1">Email</p>
                  <p>
                    <a
                      href="mailto:arcoffice@smail.iitm.ac.in"
                      className="text-decoration-none text-black"
                    >
                      arcoffice@smail.iitm.ac.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="info">
                  <p className="heading-contact-info mt-1">Phone</p>
                  <a
                    href="tel:+02222575638"
                    className="text-decoration-none text-black"
                  >
                    022-2257-5638
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="info">
                  <p className="heading-contact-info mt-1">Location</p>
                  <p>
                    Room 001, New Academic Complex 2 - NAC2 block, Alumni Ave,
                    Indian Institute of Technology Madras, Chennai, Tamil Nadu
                    600036
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i className="fa-solid fa-clock" />
                </div>
                <div className="info">
                  <p className="heading-contact-info mt-1">Office</p>
                  <p>Hours: 10 am - 5 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
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
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Contact
