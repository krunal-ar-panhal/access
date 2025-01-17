import React from 'react'

const Hero = () => {
  return (
    <>
      <div
  className="breadcrumb-area text-center shadow dark bg-fixed"
  style={{ backgroundImage: "url(./images/banner/banner-bg-9.jpg)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1>Contact Us</h1>
        <ul className="breadcrumb">
          <li>
            <a href="index.html">
              <i className="fas fa-home" /> Home
            </a>
          </li>
          <li className="active">Contact</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Hero
