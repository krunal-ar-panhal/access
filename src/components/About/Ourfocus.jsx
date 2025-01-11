import React from "react";

const Ourfocus = () => {
  return <><div className="container">
  <h2 className="heading-blue text-center mt-5 mb-2 pt-4">Our Focus</h2>
  <h3 className="text-blue text-center title-text">
    Reforming Accessibility Across Disciplines
  </h3>
  <p className="text-center">
    At the heart of ARC’s work are three key pillars
  </p>
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-md-12">
      <div className="card border-0 box-shadow-0" style={{ background: "#003c6b12" }}>
        <div className="row py-4">
          <div className="col-md-3 justify-content-center align-items-center d-flex">
            <img
              src="./images/course.svg"
              className="card-img-tops"
              alt="Teacher Training for Inclusive Learning"
            />
          </div>
          <div className="col-md-9 p-4">
            <h2 className="title-text text-blue">
              Teacher Training for Inclusive Learning
            </h2>
            <p className="card-text flex-grow-1 focus-text text-justify">
              Our goal is to raise awareness among educators about the challenges disabled
              students face from within their disciplines. By providing specialized training
              for university and school teachers, we aim to create an environment where
              educators understand the specific needs of disabled students in fields as
              varying as philosophy, chemistry, computer sciences and music. Through tailored
              tutorials and workshops, we help educators develop strategies to make their
              teaching more inclusive, ensuring that every student has the tools they need
              to succeed. To the extent possible, we make sure that our tutors are intimately
              familiar with conditions such as blindness, which is the focus of their current
              discipline-specific tutorial.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-12">
      <div className="card border-0 box-shadow-0" style={{ background: "#003c6b12" }}>
        <div className="row py-4">
          <div className="col-md-9 p-4 order-2 order-sm-1">
            <h2 className="title-text text-blue">
              Digital Information Systems for Accessibility
            </h2>
            <p className="card-text flex-grow-1 focus-text text-justify">
              We believe digital information systems have the power to transform accessibility
              beyond the classroom. By investing in advanced technology—such as specialized
              hardware, software, artificial intelligence (AI), and innovative processes—we aim
              to make public spaces like museums, libraries, community centers, and gymnasiums
              more inclusive. Our work focuses on creating digital overlays that enhance
              accessibility for disabled individuals, ensuring that they can access information
              and cultural resources that they have been historically kept away from.
            </p>
          </div>
          <div className="col-md-3 order-1 order-sm-2 justify-content-center align-items-center d-flex">
            <img
              src="./images/toilet.svg"
              className="card-img-tops"
              alt="Digital Information Systems for Accessibility"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-12">
      <div className="card border-0 box-shadow-0" style={{ background: "#003c6b12" }}>
        <div className="row py-4">
          <div className="col-md-3 justify-content-center align-items-center d-flex">
            <img
              src="./images/virtual-reality.svg"
              className="card-img-tops"
              alt="Augmented and Virtual Reality for Knowledge Access"
            />
          </div>
          <div className="col-md-9 p-4">
            <h2 className="title-text text-blue">
              Augmented and Virtual Reality for Knowledge Access
            </h2>
            <p className="card-text flex-grow-1 focus-text text-justify">
              Our research is also pushing the boundaries of augmented and virtual reality (AR/VR)
              to create new ways for disabled individuals to engage with knowledge. We are developing
              immersive AR and VR environments that allow for novel, interactive experiences tailored
              to diverse learning needs. By combining cutting-edge technology with traditional
              craftsmanship, we are building a library of knowledge, things, descriptions, and
              extended realities that we hope will push the boundaries of inclusive learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>;
};

export default Ourfocus;
