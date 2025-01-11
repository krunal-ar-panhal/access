import React from 'react'

const Team = () => {
  return (
    <>
      <div className="container container-card">
  <h2 className="heading-blue my-5 pt-4 text-center">Team Members</h2>
  <div className="row justify-content-center">
    {/* Team Member 1 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Prof Hem 2.jpg"
          className="card-img-top"
          alt="Dr. Hemachandran Karah, Co-founder of The ARC"
        />
        {/* <div
          class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 text-white transition-overlay"
        >
          <div>
            <a href="#" class="text-white mx-2" aria-label="Instagram"
  s            ><i class="fab fa-instagram fa-lg"></i
            ></a>
            <a href="#" class="text-white mx-2" aria-label="YouTube"
              ><i class="fab fa-youtube fa-lg"></i
            ></a>
            <a href="#" class="text-white mx-2" aria-label="Twitter"
              ><i class="fab fa-twitter fa-lg"></i
            ></a>
            <a href="#" class="text-white mx-2" aria-label="facebook"
              ><i class="fab fa-facebook fa-lg"></i
            ></a>
          </div>
        </div> */}
        <div className="card-body text-center">
          <a
            href="https://hss.iitm.ac.in/hemachandran-karah/"
            target="_blank"
            aria-label="Dr. Hemachandran Karah Profile"
          >
            <h3 className="card-title fw-bold mb-1 text-blue">
              Dr. Hemachandran Karah
            </h3>
          </a>
          <p className="card-text text-dark mb-2">Co-founder, The ARC</p>
          <p className="card-text small">
            Associate Professor, Dept of Humanities and Social Sciences, IIT
            Madras
          </p>
        </div>
      </div>
    </div>
    {/* Team Member 2 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Prof Saji 2.jpg"
          className="card-img-top"
          alt="Dr. Saji K Mathew, Co-founder of The ARC"
        />
        <div className="card-body text-center">
          <h3 className="">
            <a
              href="https://doms.iitm.ac.in/index.php/skm"
              className="card-title fw-bold mb-1 text-blue"
              target="_blank"
            >
              Dr. Saji K Mathew
            </a>
            <a
              href="https://in.linkedin.com/in/sajikmathew"
              target="_blank"
              aria-label="Dr. Saji K Mathew Profile"
              style={{ color: "#0077b5" }}
            >
              <i className="px-2 fa-brands fa-linkedin" />
            </a>
          </h3>
          <p className="card-text text-dark mb-2">Co-founder, The ARC</p>
          <p className="card-text small">
            Professor, Dept of Management Studies, IIT Madras
          </p>
        </div>
      </div>
    </div>
    {/* Team Member 3 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <a
          href="https://ed.iitm.ac.in/~vasa/labmembers.htm"
          target="_blank"
          aria-label="Dr. Nilesh J. Vasa Profile"
        >
          <img
            src="./src/assets/images/team member/Prof Vasa 2.jpg"
            className="card-img-top"
            alt="Dr. Nilesh J. Vasa, Co-founder of The ARC"
          />
        </a>
        <div className="card-body text-center">
          <a
            href="https://ed.iitm.ac.in/~vasa/labmembers.htm"
            target="_blank"
            aria-label="Dr. Nilesh J. Vasa Profile"
          ></a>
          <h3 className="">
            <a
              href="https://ed.iitm.ac.in/~vasa/labmembers.htm"
              target="_blank"
              aria-label="Dr. Nilesh J. Vasa Profile"
            ></a>
            <a
              href="https://ed.iitm.ac.in/~vasa/labmembers.htm"
              className="card-title fw-bold mb-1 text-blue"
              target="_blank"
            >
              Dr. Nilesh J. Vasa
            </a>
            <a
              href="https://jp.linkedin.com/in/nilesh-vasa-76532bbb"
              target="_blank"
              aria-label="Dr. Saji K Mathew Profile"
              style={{ color: "#0077b5" }}
            >
              <i className="px-2 fa-brands fa-linkedin" />
            </a>
          </h3>
          <p className="card-text text-dark mb-2">Co-founder, The ARC</p>
          <p className="card-text small">
            Professor, Dept of Engineering Design, IIT Madras
          </p>
        </div>
      </div>
    </div>
    {/* Team Member 4 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Karthika 2.jpg"
          className="card-img-top"
          alt="Dr. Karthika J, Manager of The ARC"
        />
        <div className="card-body text-center">
          <h3 className="card-title fw-bold mb-1 text-blue">Dr. Karthika J</h3>
          <p className="card-text text-dark mb-2">Manager, The ARC</p>
        </div>
      </div>
    </div>
    {/* Team Member 5 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Swikriti.jpg"
          className="card-img-top"
          alt="Swikriti Sanyal, Research Associate at The ARC"
        />
        <div className="card-body text-center">
          <h3 className="card-title fw-bold mb-1 text-blue">
            Swikriti Sanyal
            <a
              href="http://www.linkedin.com/in/swikriti-sanyal-6b8a21144"
              target="_blank"
              aria-label="Swikriti Sanyal"
              style={{ color: "#0077b5" }}
            >
              <i className="px-2 fa-brands fa-linkedin" />
            </a>
          </h3>
          <p className="card-text text-dark mb-2">
            Research Associate, The ARC
          </p>
          <p className="card-text small">PhD Candidate, IIT Madras</p>
        </div>
      </div>
    </div>
    {/* Team Member 6 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Subisha KR 2.jpg"
          className="card-img-top"
          alt="Subisha K R, Research Associate at The ARC"
        />
        <div className="card-body text-center">
          <h3 className="card-title fw-bold mb-1 text-blue">
            Subisha K R
            <a
              href="https://in.linkedin.com/in/subisha-kr-16831982"
              target="_blank"
              aria-label="Subisha K R"
              style={{ color: "#0077b5" }}
            >
              <i className="px-2 fa-brands fa-linkedin" />
            </a>
          </h3>
          <p className="card-text text-dark mb-2">
            Research Associate, The ARC
          </p>
          <p className="card-text small">PhD Candidate, IIT Madras</p>
        </div>
      </div>
    </div>
    {/* Team Member 7 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Sadiq 2.jpg"
          className="card-img-top"
          alt="Muhammed Sadiq T, Research Associate at The ARC"
        />
        <div className="card-body text-center">
          <h3 className="card-title fw-bold mb-1 text-blue">
            Muhammed Sadiq T
            <a
              href="https://in.linkedin.com/in/connectsadiqt"
              target="_blank"
              aria-label="Muhammed Sadiq T"
              style={{ color: "#0077b5" }}
            >
              <i className="px-2 fa-brands fa-linkedin" />
            </a>
          </h3>
          <p className="card-text text-dark mb-2">
            Research Associate, The ARC
          </p>
          <p className="card-text small">PhD Candidate, IIT Madras</p>
        </div>
      </div>
    </div>
    {/* Team Member 8 */}
    <div className="col-md-3">
      <div className="card border-0 ">
        <img
          src="./src/assets/images/team member/Yuvaraj.jpg"
          className="card-img-top"
          alt="Yuvaraj, Office Staff at The ARC"
        />
        <div className="card-body text-center">
          <h3 className="card-title fw-bold mb-1 text-blue">Yuvaraj</h3>
          <p className="card-text text-dark mb-2">Office staff, The ARC</p>
        </div>
      </div>
    </div>
    <img
      src="./src/assets/images/team member/team-member.png"
      className="mt-3 bg-body rounded"
      style={{ boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175) !important" }}
      alt="all team member group img"
    />
  </div>
</div>

    </>
  )
}

export default Team
