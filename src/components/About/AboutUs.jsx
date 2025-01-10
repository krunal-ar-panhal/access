import React from 'react'

const AboutUs = () => {
  return (
    <>
      <>
  <section>
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Right: Embedded Video with Custom Image */}
        <div className="col-lg-6 px-md-5 px-sm-0">
          <div className="video-container pt-5">
            {/* Video Thumbnail */}
            <img
              src="./assets/images/about-us-bg-video.jpg"
              alt="A preview image representing our focus video"
              id="video-thumbnail"
              tabIndex={0}
            />
            <div
              className="about-two__experience"
              style={{ top: "42% !important", left: "45% !important" }}
            >
              {/* Accessible Video Play Button */}
              <a
                href="https://www.youtube.com/embed/lsk8JWuoReY?si=qfMrJFImFzL5BIxp"
                className="about-two__video video-popup"
                aria-label="Play video about our focus"
                role="button"
                tabIndex={0}
              >
                <i className="fa-solid fa-play" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        {/* Left: Introduction Text */}
        <div className="col-lg-6 mb-lg-0">
          <h2
            id="our-focus-heading"
            className="heading-blue mt-5 mb-2 pt-4"
            tabIndex={0}
          >
            About Us
          </h2>
          <p className="text-blue title-text">
            Welcome to The Accessibility Research Centre
          </p>
          <p className="focus-text text-justify" tabIndex={0}>
            At The Accessibility Research Centre, we are dedicated to addressing
            the intersection of disability and academic disciplines. We believe
            that current systems and fields of knowledge are often unprepared to
            accommodate individuals with disabilities, but we are committed to
            changing that. Our focus is on tackling the complex Disability and
            Discipline (D&amp;D) nexus—the existing gaps in our everyday
            knowledge of disabled people's mobility across disciplines and the
            latter’s inherent capacity to uphold the same.
          </p>
          <p className="focus-text text-justify" tabIndex={0}>
            The ARC was established with the mission to reform learning
            environments, both in schools and universities, by developing
            solutions that go beyond individually oriented’ assistive technology
            solutions. While tools like screen readers can be helpful, they do
            not address the systemic nature of disability exclusion. We hope to
            foster truly inclusive research, teaching, learning, and
            collaborative environments. We envision a future where accessibility
            is deeply integrated into the core of every academic life.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* vision & mission */}
  <div className="container my-5">
    <div className="row align-items-center mb-4">
      <div className="row border rounded g-0 mb-5">
        <div className="col-md-4">
          <img
            src="./assets/images/vision.jpg"
            className="img-fluid rounded-start"
            alt="Our Vision"
          />
        </div>
        <div className="col-12 col-md-8 p-4">
          <h2 className="heading-blue">Our Vision</h2>
          <p className="text-justify">
            To create an inclusive world where knowledge and learning is
            accessible to all. By transforming all disciplines, digital systems,
            and immersive technologies to meet the diverse needs of individuals
            with disabilities, we hope to foster true equality across places of
            learning, cultural institutions and public spaces.
          </p>
        </div>
      </div>
      <div className="row border rounded g-0 mb-3">
        <div className="col-12 col-md-8 p-4 order-2 order-sm-1">
          <h2 className="heading-blue">Our Mission</h2>
          <p className="text-justify">
            At the Accessibility Research Centre (ARC), our mission is to
            address the gap between disability and discipline by making
            education, digital systems, and public spaces more accessible.
            Through teacher training, innovative technologies, and immersive
            solutions, we are working to ensure that all individuals, regardless
            of impairments, have equal access to knowledge and true empowerment.
          </p>
        </div>
        <div className="col-md-4 order-1 order-sm-2">
          <img
            src="./assets/images/mision.jpg"
            className="img-fluid rounded-end"
            alt="Our Vision"
          />
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default AboutUs
