import React from 'react'

const LatestBlogs = () => {
  return (
    <>
      <section className="blog-section">
  <div className="container">
    <h2 className="text-center mb-5 heading-blue">Latest Blog Posts</h2>
    <div className="owl-carousel owl-theme">
      {/* Blog 1 */}
      <div className="item d-flex align-items-stretch">
        {/* href="https://www.deccanherald.com//technology/a-blind-persons-experiments-with-tech-3297838" */}
        <a
          href="blind person’s experiments.html"
          className="text-decoration-none"
          aria-label="Read more about new changes in IIT admissions"
        >
          <div className="blog-card d-flex flex-column">
            <img
              src="./images/blog-post-1.png"
              alt="New changes in IIT admissions"
              className="img-fluid"
            />
            <div className="blog-card-body flex-grow-1">
              <h2 className="blog-title">
                A blind person’s experiments with tech
              </h2>
              <p className="blog-excerpt">
                <b className="text-blue">Authors : </b> Author- L Subramani
              </p>
              <span className="blog-excerpt d-flex align-items-center mb-0">
                Read More <i className="px-2 fa-solid fa-angles-right" />
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="item d-flex align-items-stretch">
        <a
          href="blind person’s experiments.html"
          className="text-decoration-none"
          aria-label="Read more about new changes in IIT admissions"
        >
          <div className="blog-card d-flex flex-column">
            <img
              src="./images/blog-post-1.png"
              alt="New changes in IIT admissions"
              className="img-fluid"
            />
            <div className="blog-card-body flex-grow-1">
              <h2 className="blog-title">
                A blind person’s experiments with tech
              </h2>
              <p className="blog-excerpt">
                <b className="text-blue">Authors : </b> Author- L Subramani
              </p>
              <span className="blog-excerpt d-flex align-items-center mb-0">
                Read More <i className="px-2 fa-solid fa-angles-right" />
              </span>
            </div>
          </div>
        </a>
      </div>
      {/* Blog 3 */}
      <div className="item d-flex align-items-stretch">
        <a
          href="students with disabilities.html"
          className="text-decoration-none"
          aria-label="Read more about admission reforms in 2025"
        >
          <div className="blog-card d-flex flex-column">
            <img
              src="./images/blog-post-2.png"
              alt="Admission reforms in 2025"
              className="img-fluid"
            />
            <div className="blog-card-body flex-grow-1">
              <h2 className="blog-title">
                Increasing admission of students with disabilities at IITs: A
                new paradigm
              </h2>
              <p className="blog-excerpt">
                <b className="text-blue">Authors : </b> Dr Hemachandran Karah,
                Saji K Mathew, Nilesh J Vasa
              </p>
              <span className="blog-excerpt d-flex align-items-center mb-0">
                Read More <i className="px-2 fa-solid fa-angles-right" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
    {/* View All Blogs Link */}
    {/* <div class="view-all-blogs">
      <a href="/blogs" class="btn btn-link"
        >View All Blogs <i class="fa-solid fa-arrow-right"></i
      ></a>
    </div> */}
  </div>
</section>

    </>
  )
}

export default LatestBlogs
