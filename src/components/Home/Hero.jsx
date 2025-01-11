import React from 'react'
import news from '.././../assets/images/news.png'

const Hero = () => {
  
  return (
    <>
      <section className="outter hero-video">
  <section className="video-container">
    <video
      src="./src/assets/images/banner/hero_bg_video.mp4"
      autoPlay=""
      loop=""
      playsInline=""
      muted=""
    />
    <div className="callout">
      <div className="container text-center">
        <img
          src="./src/assets/images/main-logo.png"
          alt="Circular logo with a light blue infinity symbol and three abstract human figures above it on a dark blue background. Below the symbol are three horizontal lines suggesting waves. The background shows a blurred word 'HIMALAYA.'"
          className="hero-logo"
        />
        <h1 className="hero-tagline mt-4">The Accessibility Research Centre</h1>
        <p className="the-arc-title">The ARC of infinite possibilities</p>
        <div className="hero-buttons mt-5">
          <a
            href="Braille-Book-Project.html"
            className="mx-3 my-0 arc-btn arc-btn--base"
          >
            Foundational Learning
          </a>
          <a href="d&d-detail.html" className="arc-btn arc-btn--base">
            Higher Education
          </a>
        </div>
        <p style={{ fontSize: "1rem", color: "#0c4965" }} className="mt-5">
          We are located at Indian Institute of Technology Madras
        </p>
        <a href="https://www.iitm.ac.in/" target="_blank">
          <img
            src={news}
            alt="Sticky Image"
            className="mt-3"
            aria-label="IIT Madras logo"
            style={{ width: "70px !important", height: 70 }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Indian Institute Of Technology Madras"
          />
        </a>
      </div>
    </div>
  </section>
</section>

    </>
  )
}

export default Hero
