import React from 'react'

const GallerySection = () => {
  return (
    <>
      <section className="gallery-section my-5" id="photo-albums">
  <div className="container">
    <div className="mx-md-5">
      <h2 className="heading-blue text-center mb-4">
        Our Photo &amp; Video Album
      </h2>
    </div>
    <div className="row g-4 d-flex align-items-center justify-content-center">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img
            src="./src/assets/images/SightsaversIndia_FieldVisit/IMG-1.jpg"
            className="card-img-top"
            alt="Sightsavers India Field Visit"
            loading="lazy"
          />
          <div className="card-body text-center">
            <h3 className="text-blue">Sightsavers India Field Visit</h3>
            <button type="button" className="arc-btn arc-btn--base">
              <a
                href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-1.jpg"
                className="  gallery-item"
                data-group="group1"
              >
                View Album
              </a>
            </button>
          </div>
        </div>
        {/* Hidden images */}
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-2.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-3.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-4.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-5.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-6.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
        <a
          href="./src/assets/images/SightsaversIndia_FieldVisit/IMG-7.jpg"
          className="gallery-item d-none"
          data-group="group1"
        />
      </div>
      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img
            src="./src/assets/images/General Meetings at ARC/1.jpg"
            className="card-img-top"
            alt="General Meetings at ARC"
            loading="lazy"
          />
          <div className="card-body text-center">
            <h3 className="text-blue">
              General Meetings at ARC &nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
            <button type="button" className="arc-btn arc-btn--base">
              <a
                href="./src/assets/images/General Meetings at ARC/1.jpg"
                className="gallery-item"
                data-group="group2"
              >
                View Album
              </a>{" "}
            </button>
          </div>
        </div>
        {/* Hidden images */}
        <a
          href="./src/assets/images/General Meetings at ARC/2.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/3.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/3.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/4.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/5.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/6.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/7.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/8.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/9.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/10.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/12.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/13.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
        <a
          href="./src/assets/images/General Meetings at ARC/14.jpg"
          className="gallery-item d-none"
          data-group="group2"
        />
      </div>
      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img
            src="./src/assets/images/Periyar Science and Technology Centre field visit/1.jpg"
            className="card-img-top"
            alt="Periyar Science and Technology Centre Field Visit"
            loading="lazy"
          />
          <div className="card-body text-center">
            <h3 className="text-blue">Periyar Science and Technology Centre</h3>
            <button type="button" className="arc-btn arc-btn--base">
              <a
                href="./src/assets/images/Periyar Science and Technology Centre field visit/1.jpg"
                className="gallery-item"
                data-group="group3"
              >
                View Album
              </a>
            </button>
          </div>
        </div>
        {/* Hidden images */}
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/2.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/3.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/4.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/5.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/6.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/7.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/8.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/9.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/10.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/11.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/12.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/13.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/14.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
        <a
          href="./src/assets/images/Periyar Science and Technology Centre field visit/15.jpg"
          className="gallery-item d-none"
          data-group="group3"
        />
      </div>
      {/* Card 4 */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img
            src="./src/assets/images/understanding ocean - field visit/1.jpg"
            className="card-img-top"
            alt="Understanding Ocean Field Visit"
            loading="lazy"
          />
          <div className="card-body text-center">
            <h3 className="text-blue">Understanding Ocean Field Visit</h3>
            <button type="button" className="arc-btn arc-btn--base">
              <a
                href="./src/assets/images/understanding ocean - field visit/1.jpg"
                className="gallery-item"
                data-group="group4"
              >
                View Album
              </a>
            </button>
          </div>
        </div>
        {/* Hidden images */}
        <a
          href="./src/assets/images/understanding ocean - field visit/2.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
        <a
          href="./src/assets/images/understanding ocean - field visit/3.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
        <a
          href="./src/assets/images/understanding ocean - field visit/4.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
        <a
          href="./src/assets/images/understanding ocean - field visit/5.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
        <a
          href="./src/assets/images/understanding ocean - field visit/6.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
        <a
          href="./src/assets/images/understanding ocean - field visit/7.jpg"
          className="gallery-item d-none"
          data-group="group4"
        />
      </div>
      {/* Card 5 */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <img
            src="./src/assets/images/Museum photos/1.png"
            className="card-img-top"
            alt="Museum Photos"
            loading="lazy"
          />
          <div className="card-body text-center">
            <h3 className="text-blue">
              &nbsp;&nbsp; Museum Photos
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
            <button type="button" className="arc-btn arc-btn--base">
              <a
                href="./src/assets/images/Museum photos/1.png"
                className="gallery-item"
                data-group="group5"
              >
                View Album
              </a>
            </button>
          </div>
        </div>
        {/* Hidden images */}
        <a
          href="./src/assets/images/Museum photos/2.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/3.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/4.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/5.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/6.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/7.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/8.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/9.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/10.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/11.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/12.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/13.png"
          className="gallery-item d-none"
          data-group="group5"
        />
        <a
          href="./src/assets/images/Museum photos/14.png"
          className="gallery-item d-none"
          data-group="group5"
        />
      </div>
    </div>
    {/* <div class="row">
    <h3 class="text-blue text-center mt-4 mb-3">
      General Meetings at ARC
    </h3>
   
    <div class="col-md-3 col-sm-6 mt-3">
      <a
        href="https://www.youtube.com/watch?v=example1"
        class="gallery-item video-popup"
        aria-label="Watch Video 1"
      >
        <img
          src="./src/assets/images/contact-banner.jpg"
          alt="Video Album - Video 1"
          class="img-fluid"
loading="lazy"
        />
        <span
          class="play-icon position-absolute top-50 start-50 translate-middle text-white d-flex justify-content-center align-items-center"
          aria-hidden="true"
          >▶</span
        >
      </a>
    </div>
  </div> */}
  </div>
</section>

    </>
  )
}

export default GallerySection
