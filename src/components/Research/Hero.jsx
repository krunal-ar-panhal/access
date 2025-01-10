import React from 'react'

const Hero = () => {
  return (
    <>
      <div
  className="breadcrumb-area text-center shadow dark bg-fixed"
  style={{ backgroundImage: "url(./assets/images/banner/banner-bg-6.jpg)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1>Research &amp; Projects</h1>
        <ul className="breadcrumb">
          <li>
            <a href="index.html">
              <i className="fas fa-home" /> Home
            </a>
          </li>
          <li className="active">Research &amp; Projects</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Hero
