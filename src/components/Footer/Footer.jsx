import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer-section">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget company-intro-widget">
            <a href="index.html" className="site-logo">
              {/* <img
                src="./src/assets/images/main-logo -bg.png"
                alt="logo"/> */}
              <p className="text-blue">
                <b>The Accessibility Research Centre</b>
              </p>
            </a>
            <a href="https://www.iitm.ac.in/" target="_blank">
              <img
                src="./src/assets/images/iit madrash  ing.png"
                alt="Sticky Image"
                className="mt-3"
                aria-label="IIT Madras logo"
                style={{ width: "70px !important", height: 70 }}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Indian Institute Of Technology Madras"
              />
            </a>
            {/* <p>
              The ARC of infinite possibilities We are located at Indian
              Institute of Technology Madras
            </p> */}
            <ul className="company-footer-contact-list d-flex">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-light me-2 text-decoration-none"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  className="text-light me-2 text-decoration-none"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com"
                  className="text-light me-2 text-decoration-none"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-light me-2 text-decoration-none"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-light text-decoration-none"
                  aria-label="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget course-links-widget">
            <p className="text-light title-text">Quick Links</p>
            <ul className="courses-link-list">
              <li>
                <a href="about.html">
                  <i className="fas fa-long-arrow-alt-right" />
                  About us
                </a>
              </li>
              <li>
                <a href="research-projects.html">
                  <i className="fas fa-long-arrow-alt-right" />
                  Research &amp; Projects
                </a>
              </li>
              <li>
                <a href="gallery.html">
                  <i className="fas fa-long-arrow-alt-right" />
                  Gallery
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i className="fas fa-long-arrow-alt-right" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-3 col-md-6 col-sm-6 d-none">
          <div className="widget latest-news-widget">
            {/*                <h2 class="widget-title">lastest Event</h2>*/}
            <ul className="small-post-list">
              <li>
                <div className="small-post-item">
                  <a href="#" className="post-date">
                    28th Feb 2025
                  </a>
                  <h3 className="small-post-title">
                    <a href="#">Sound Sculpting for Science.</a>
                  </h3>
                </div>
              </li>
              {/* small-post-item end */}
              <li>
                <div className="small-post-item">
                  <a href="#" className="post-date">
                    15th Jan 2025
                  </a>
                  <h3 className="small-post-title">
                    <a href="#">Cultural Textiles Showcase</a>
                  </h3>
                </div>
              </li>
              {/* small-post-item end */}
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="widget newsletter-widget">
            {/*                <h2 class="widget-title">News letter</h2>*/}
            <div className="footer-newsletter">
              <form className="news-letter-form">
                <label htmlFor="news-email" className="text-light title-text">
                  News letter
                </label>
                <p className="mt-1">
                  Sign up for our newsletter to receive the latest updates from
                  the ARC
                </p>
                <div className="d-flex">
                  <input
                    type="email"
                    name="news"
                    id="news-email"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="arc-ft-btn arc-ft-btn--base ms-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* widget end */}
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-sm-12 text-md-left">
          <span className="copy-right-text">
            © 2025
            <a href="#">The Accessibility Research Centre</a> All Rights
            Reserved.
          </span>
        </div>
        <div className="col-md-6 col-sm-12">
          <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
            <li>
              <a href="terms-conditions.html">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* footer-bottom end */}
</footer>

    </>
  )
}

export default Footer
