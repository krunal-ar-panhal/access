import React from 'react'

const Slider = () => {
  return (
    <>
      <section className="partner-section">
  <div className="container">
    <h2 className="text-center my-5 pt-4 heading-blue">
      Collaborations &nbsp;&amp;&nbsp; Partnerships
    </h2>
    <div className="row">
      {/* Funding partners */}
      <div className="col-12 m-auto">
        <h3 className="partner-heading text-center">Funding Partner</h3>
        <br />
        <a
          href="https://www.greatship.com/csr.html"
          target="_blank"
          aria-label="Great Eastern Foundation (GEF)"
          className="d-flex align-items-center"
        >
          <img
            src="./assets/images/GEF.png"
            alt="Logo of Principal Founder 1"
            className="m-auto d-block"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Great Eastern Foundation (GEF)"
          />
        </a>
      </div>
      {/* Friends of ARC */}
      {/* Friends of ARC */}
      <div className="col-12 pt-5 m-auto">
        <h3
          className="partner-heading text-center"
          style={{ fontSize: "1rem !important" }}
        >
          Friends of ARC
        </h3>
        <br />
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {/* Original Images with Links */}
            <a
              href="https://www.tnstc.gov.in"
              target="_blank"
              aria-label="Visit Tamilnadu Science and Technology Centre (TNSTC) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/TNSTC.jpg"
                alt="TNSTC Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tamilnadu Science and Technology Centre (TNSTC) Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://gb.abrsm.org"
              target="_blank"
              className="d-flex align-items-center"
              aria-label="Visit Associated Board of the Royal Schools of Music (ABRSM) Website"
            >
              <img
                src="./assets/images/ABRSM.png"
                alt="ABRSM Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Associated Board of the Royal Schools of Music (ABRSM) London, UK"
              />
            </a>
            <a
              href="https://www.sightsaversindia.in"
              target="_blank"
              aria-label="Visit Sightsavers India Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/Sightsavers India.svg"
                alt="Sightsavers Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Sightsavers India, New Delhi, India"
              />
            </a>
            <a
              href="https://www.senseintindia.org"
              target="_blank"
              aria-label="Visit Sense International India Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/Sense International India.png"
                alt="Sense International Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Sense International India, Ahmedabad, Gujarat, India"
              />
            </a>
            <a
              href="https://vidyasagar.co.in"
              target="_blank"
              aria-label="Visit Vidya Sagar Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/vidhya.jpg"
                alt="Virtual Reality Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Vidya Sagar, Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://www.niot.res.in"
              target="_blank"
              aria-label="Visit National Institute of Ocean Technology (NIOT) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/NIOT.jpg"
                alt="NIOT Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="National Institute of Ocean Technology (NIOT), Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://nptel.ac.in"
              target="_blank"
              aria-label="Visit National Programme on Technology Enhanced Learning (NPTEL) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/NPTEL.jpg"
                alt="NPTEL Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="National Programme on Technology Enhanced Learning (NPTEL), Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://raisedlinesfoundation.org"
              target="_blank"
              aria-label="Visit Raised Lines Foundation (RLF) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/RLF.png"
                alt="RLF Logo"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Raised Lines Foundation (RLF), Noida, Uttar Pradesh, India"
              />
            </a>
            {/* Duplicate Images for Seamless Loop */}
            {/* Same links as above for the duplicated images */}
            <a
              href="https://www.tnstc.gov.in"
              target="_blank"
              aria-label="Visit Tamilnadu Science and Technology Centre (TNSTC) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/TNSTC.jpg"
                alt="TNSTC Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tamilnadu Science and Technology Centre (TNSTC) Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://gb.abrsm.org"
              target="_blank"
              aria-label="Visit Associated Board of the Royal Schools of Music (ABRSM) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/ABRSM.png"
                alt="ABRSM Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Associated Board of the Royal Schools of Music (ABRSM) London, UK"
              />
            </a>
            <a
              href="https://www.sightsaversindia.in"
              target="_blank"
              aria-label="Visit Sightsavers India Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/Sightsavers India.svg"
                alt="Sightsavers Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Sightsavers India, New Delhi, India"
              />
            </a>
            <a
              href="https://www.senseintindia.org"
              target="_blank"
              aria-label="Visit Sense International India Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/Sense International India.png"
                alt="Sense International Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Sense International India, Ahmedabad, Gujarat, India"
              />
            </a>
            <a
              href="https://vidyasagar.co.in"
              target="_blank"
              aria-label="Visit Vidya Sagar Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/vidhya.jpg"
                alt="Virtual Reality Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Vidya Sagar, Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://www.niot.res.in"
              target="_blank"
              aria-label="Visit National Institute of Ocean Technology (NIOT) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/NIOT.jpg"
                alt="NIOT Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="National Institute of Ocean Technology (NIOT), Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://nptel.ac.in"
              target="_blank"
              aria-label="Visit National Programme on Technology Enhanced Learning (NPTEL) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/NPTEL.jpg"
                alt="NPTEL Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="National Programme on Technology Enhanced Learning (NPTEL), Chennai, Tamil Nadu, India"
              />
            </a>
            <a
              href="https://raisedlinesfoundation.org"
              target="_blank"
              aria-label="Visit Raised Lines Foundation (RLF) Website"
              className="d-flex align-items-center"
            >
              <img
                src="./assets/images/RLF.png"
                alt="RLF Logo Duplicate"
                className="px-3 img-fluid"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Raised Lines Foundation (RLF), Noida, Uttar Pradesh, India"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Slider
