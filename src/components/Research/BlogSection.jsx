import React from 'react'

const BlogSection = () => {
  return (
    <>
      <div className="container section-padding">
  <div className="row">
    <div className="col-lg-8">
      {/* Blog Posts Section */}
      <section id="blog-posts" className="blog-posts section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12" id="d&d">
              <article>
                <div className="post-img">
                  <img
                    src="./images/project-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <a href="d&d-detail.html" className="text-blue">
                  <h2 className="title">
                    Disabilities and Discipline (D&amp;D)
                  </h2>
                </a>
                <div className="meta-top">
                  {/* <ul>
                  <li class="d-flex align-items-center">
                    <i class="fa-regular fa-clock"></i>
                    <a href="#"
                      ><time datetime="2022-01-01">Jan 1, 2022</time></a
                    >
                  </li>
                </ul> */}
                </div>
                <div className="content">
                  <p className="text-justify">
                    The D&amp;D phenomenon highlights the gap in disability
                    accommodation across academic disciplines, advocating for
                    accessibility to be integrated into curricula from the
                    start. At ARC, we aim to make all disciplines inclusive by
                    redesigning syllabi, assessments, and teaching methods. Our
                    teacher tutorials support educators working with blind,
                    low-vision, and Deaf students in inclusive settings.
                  </p>
                  <div className="d-flex justify-content-end">
                    <a
                      href="d&d-detail.html"
                      className="arc-btn--base arc-btn text-end"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-12" id="museum">
              <article>
                <div className="post-img">
                  <img
                    src="./images/Museum Project.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <a href="museum-project.html" className="text-blue">
                  <h2 className="title">Museum Project</h2>
                </a>
                <div className="meta-top">
                  {/* <ul>
                  <li class="d-flex align-items-center">
                    <i class="fa-regular fa-clock"></i>
                    <a href="#"
                      ><time datetime="2022-01-01">Jan 1, 2022</time></a
                    >
                  </li>
                </ul> */}
                </div>
                <div className="content">
                  <p className="text-justify">
                    The ARC Museum Project is focused on making museum
                    experiences accessible to all students, including those with
                    disabilities. By using technology like extended reality,
                    audio immersion, and touch, we aim to teach ocean sciences
                    in an engaging, multi-sensory way, especially for visually
                    impaired students. Our goal is to create a space where
                    learning about marine life becomes exciting and inclusive.
                  </p>
                  <div className="d-flex justify-content-end">
                    <a
                      href="museum-project.html"
                      className="arc-btn--base arc-btn text-end"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-12" id="braille">
              <article>
                <div className="post-img">
                  <img
                    src="./images/Braille Book Project.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <a href="Braille-Book-Project.html" className="text-blue">
                  <h2 className="title">Braille Book Project</h2>
                </a>
                <div className="meta-top">
                  {/* <ul>
                  <li class="d-flex align-items-center">
                    <i class="fa-regular fa-clock"></i>
                    <a href="#"
                      ><time datetime="2022-01-01">Jan 1, 2022</time></a
                    >
                  </li>
                </ul> */}
                </div>
                <div className="content">
                  <p className="text-justify">
                    Through our Braille Book Project, we are enhancing
                    educational access for visually impaired students by
                    creating Braille books and sound-based learning modules on
                    ocean sciences. These resources are designed to provide an
                    immersive, accessible learning experience. We are ensuring
                    that every student has the tools they need to explore and
                    understand the world around them.
                  </p>
                  <div className="d-flex justify-content-end">
                    <a
                      href="Braille-Book-Project.html"
                      className="arc-btn--base arc-btn text-end"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
          </div>
          {/* End blog posts list */}
        </div>
      </section>
      {/* /Blog Posts Section */}
    </div>
    <div className="col-lg-4 sidebar">
      <div className="widgets-container">
        {/* Recent Posts Widget */}
        <div className="recent-posts-widget widget-item">
          <h3 className="widget-title">Recent Project</h3>
          <div className="post-item">
            <img
              src="./images/project-1.jpg"
              alt=""
              className="flex-shrink-0"
            />
            <div>
              <h4>
                <a href="d&d-detail.html">
                  Disabilities and Discipline (D&amp;D)
                </a>
              </h4>
              {/* <time datetime="2020-01-01">Jan 1, 2020</time> */}
            </div>
          </div>
          {/* End recent post item*/}
          <div className="post-item">
            <img
              src="./images/Museum Project.jpg"
              alt=""
              className="flex-shrink-0"
            />
            <div>
              <h4>
                <a href="museum-project.html">Museum Project</a>
              </h4>
              {/* <time datetime="2020-01-01">mar 11, 2020</time> */}
            </div>
          </div>
          {/* End recent post item*/}
          <div className="post-item">
            <img
              src="./images/Braille Book Project.jpg"
              alt=""
              className="flex-shrink-0"
            />
            <div>
              <h4>
                <a href="Braille-Book-Project.html">Braille Book Project</a>
              </h4>
              {/* <time datetime="2020-01-01">feb 10, 2020</time> */}
            </div>
          </div>
          {/* End recent post item*/}
        </div>
        {/*/Recent Posts Widget */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default BlogSection
