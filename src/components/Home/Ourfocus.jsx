import React from 'react'

const Ourfocus = () => {
  return (
    <>
      <section
  className="focus-section"
  role="region"
  id="learning"
  aria-labelledby="our-focus-heading"
>
  <div className="container">
    <div className="row align-items-center">
      {/* Left: Introduction Text */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h2 id="our-focus-heading" tabIndex={0}>
          Our focus
        </h2>
        <h3 className="title-text" tabIndex={0}>
          A Future for Inclusive Knowledge learning
        </h3>
        <p tabIndex={0} className="mt-3 text-justify">
          At the Accessibility Research Centre, our vision is a world where
          academic disciplines are fully inclusive, where disability is no
          longer an obstacle to learning and participation. We envision a future
          where every institution, from schools to universities, integrates
          accessibility at its core—not just through assistive technologies but
          by rethinking how knowledge is created, delivered, and experienced.
        </p>
        <p tabIndex={0} className="text-justify ">
          Through innovative approaches in teacher training, digital systems,
          such as Extended Reality (XR) and AI, we aim to dismantle the barriers
          that prevent individuals with disabilities from accessing education
          and cultural resources. By building a more inclusive academic
          landscape, we hope to empower future generations, ensuring that all
          students, with different abilities and accessibility challenges, can
          thrive in a supportive environment.
        </p>
      </div>
      {/* Right: Embedded Video with Custom Image */}
      <div className="col-lg-6">
        <div className="video-container">
          {/* Video Thumbnail */}
          <img
            src="./images/IITMadras.jpg"
            alt="A preview image representing our focus video"
            id="video-thumbnail"
            tabIndex={0}
          />
          <div className="about-two__experience">
            {/* Accessible Video Play Button */}
            <a
              href="https://www.youtube.com/embed/LngANx9dHYM?si=CZPv_2Ga5nTkkOFU"
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
    </div>
  </div>
</section>

    </>
  )
}

export default Ourfocus
