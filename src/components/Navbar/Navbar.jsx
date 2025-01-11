import React from "react";

function Navbar() {
  return (
    <>
      <div
        className="accessibility-bar"
        // role="navigation"
        // aria-label="Accessibility Bar"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Contact Information */}
            <div className="col-md-6 d-none d-md-flex mr-auto"></div>
            {/* Right: Accessibility Tools */}
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              <button
                type="button"
                className="font-size-btn btn-sm btn btn-outline-light"
                // id="increase-font"
                aria-label="Increase font size"
              >
                A+
              </button>
              <button
                type="button"
                className="font-size-btn btn-sm btn btn-outline-light"
                // id="decrease-font"
                aria-label="Decrease font size"
              >
                A-
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                // id="reset-settings"
                // aria-label="Reset accessibility settings"
              >
                <i
                  className="fa-solid fa-arrow-rotate-right pt-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
