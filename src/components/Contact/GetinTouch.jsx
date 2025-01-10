import React from 'react'

const GetinTouch = () => {
  return (
    <>
      <section className="contact-list">
  <div className="container">
    <div className="container px-md-5">
      <h2 className="heading-blue text-center">Get in Touch with ARC</h2>
      <p className="text-center px-md-5 mx-md-5">
        We would love to hear from you! <br />
        If you have questions about our research, are interested in exploring
        collaboration opportunities, or simply want to learn more about our
        work, we’re here to connect and provide any information you need.
      </p>
      <br />
    </div>
    <div className="row gutter-y-30">
      <div className="col-lg-3 col-md-6">
        <div className="contact-list__item">
          <div className="contact-list__icon">
            <i className="fa-solid fa-envelope" />
          </div>
          <div className="contact-list__content">
            <span className="contact-list__title">support email</span>
            <a
              href="mailto: arcoffice@smail.iitm.ac.in"
              className="contact-list__info"
            >
              {" "}
              arcoffice@smail.iitm.
              <br />
              ac.in
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="contact-list__item">
          <div className="contact-list__icon">
            <i className="fa-solid fa-phone-volume" />
          </div>
          <div className="contact-list__content">
            <span className="contact-list__title">Quick Contact</span>
            <a href="tel:022-2257-5638" className="contact-list__info">
              022-2257-5638
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="contact-list__item">
          <div className="contact-list__icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <div className="contact-list__content">
            <span className="contact-list__title">Mailing Address</span>
            <p className="contact-list__info">
              Room 001, New Academic
              <span className="hidden-content" style={{ display: "none" }}>
                Complex 2 - NAC2 block Alumni Ave, Indian Institute of
                Technology Madras, Chennai, Tamil Nadu 600036
              </span>
              <a href="#" className="toggle-link text-blue">
                ... More
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="contact-list__item">
          <div className="contact-list__icon">
            <i className="fa-solid fa-clock" />
          </div>
          <div className="contact-list__content">
            <span className="contact-list__title">Office</span>
            <p className="contact-list__info">
              Hours: 10 am - 5 pm <br />
              {/* Saturday : <br> 9:00 am to 12 noon */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default GetinTouch
