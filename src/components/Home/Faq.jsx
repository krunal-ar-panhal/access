import React from 'react'

const Faq = () => {
  return (
    <>
      <div className="container research-section section-padding px-md-0 px-sm-2">
  <div className="row">
    {/* Left Side Content */}
    <div className="col-md-6">
      <h2 className="mb-4 heading-blue">
        Accessibility Research and Development
      </h2>
      <p className="text-justify">
        Our research focuses on addressing the Disability and Discipline
        (D&amp;D) phenomenon—the gap between academic disciplines and the needs
        of disabled students. Our projects aim to create systemic change in
        education and public spaces through innovative accessibility solutions.
      </p>
    </div>
    {/* Right Side Table */}
    <div className="col-md-6">
     
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <p className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              1. Teacher Training for Inclusive Learning
            </button>
          </p>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="accordion-body text-justify">
                  We are developing teacher training programs that help
                  educators understand and address the unique challenges
                  disabled students face in their disciplines. Through
                  specialized workshops and curriculum guides, we equip teachers
                  with the tools to create inclusive, accessible classrooms.
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/research-1.png"
                  width="100%"
                  alt="Teacher Training for Inclusive Learning"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Digital Accessibility Systems
            </button>
          </p>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="accordion-body text-justify">
                  Our research explores how digital technologies can improve
                  accessibility in public spaces like museums, libraries, Art
                  galleries, gymnasiums, community centres, Planetariums, public
                  parks and more. We are developing digital overlays and
                  AI-powered tools that make these spaces more accessible by
                  providing real-time support, such as screen readers and voice
                  navigation, we also aspire to see a world where accessibility
                  is a foundational conversation in these environments and not a
                  mere platform for access.
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/research-2.png"
                  width="100%"
                  alt="Digital Accessibility Systems"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. Augmented &amp; Virtual Reality (AR/VR)
            </button>
          </p>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="accordion-body text-justify">
                  We are exploring the potential of AR/VR to create immersive,
                  accessible learning environments. Our projects include
                  developing virtual learning environments, interactive 3D
                  models, and multimodal knowledge libraries that cater to
                  diverse learning needs, providing students with disabilities
                  with new ways to access knowledge. We also hope to build AR/VR
                  for sophisticated learning materials on diversity,
                  foundational learning and advancement of accessable research
                  cultures.
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/research-3.png"
                  width="100%"
                  alt="Augmented & Virtual Reality (AR/VR)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="headingfore">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefore"
              aria-expanded="false"
              aria-controls="collapsefore"
            >
              4. The Future Of Accessibility
            </button>
          </p>
          <div
            id="collapsefore"
            className="accordion-collapse collapse"
            aria-labelledby="headingfore"
            data-bs-parent="#accordionExample"
          >
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="accordion-body text-justify">
                  Our ongoing research continues to push the boundaries of
                  technology and education, with plans to expand into AI-driven
                  personalized learning and further integrate disability studies
                  into academic curriculum. We are committed to creating
                  inclusive solutions that fine tune disciplines and learning
                  enviornment at large.
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/research-4.png"
                  width="100%"
                  alt="Braille Book Project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Faq
