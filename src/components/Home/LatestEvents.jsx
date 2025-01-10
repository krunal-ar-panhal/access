import React from 'react'

const LatestEvents = () => {
  return (
    <>

<div className="container">
  <h2 className="text-center mt-5 mb-5 pt-5 heading-blue">
    Latest Events and Updates
  </h2>
  <div className="row g-4">
    {/* Left Side Calendar */}
    <div className="col-lg-5 position-relative">
      <div id="calendar" className="mb-1" />
      {/* Add modal */}
      <div
        className="modal fade edit-form"
        id="form"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="modal-title">
                Add Event
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form id="myForm">
              <div className="modal-body">
                <div
                  className="alert alert-danger"
                  role="alert"
                  id="danger-alert"
                  style={{ display: "none" }}
                >
                  End date should be greater than start date.
                </div>
                <div className="form-group">
                  <label htmlFor="event-title">
                    Event name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="event-title"
                    placeholder="Enter event name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="start-date">
                    Start date <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start-date"
                    placeholder="start-date"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end-date">
                    End date -<small className="text-muted">Optional</small>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="end-date"
                    placeholder="end-date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="event-color">Color</label>
                  <input
                    type="color"
                    className="form-control"
                    id="event-color"
                    defaultValue="#3788d8"
                  />
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  id="submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete Modal */}
      <div
        className="modal fade"
        id="delete-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="delete-modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="delete-modal-title">
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center" id="delete-modal-body">
              Are you sure you want to delete the event?
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary rounded-sm"
                data-dismiss="modal"
                id="cancel-button"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger rounded-lg"
                id="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Right Side Blog Listing */}
    <div className="col-lg-7">
      <div className="border rounded shadow-sm p-4">
        {/* Blog Item */}
        <div className="mb-4 gap-4 d-flex border-bottom">
          <div>
            <p className="calender-event-date">Feb 28, 2024</p>
          </div>
          <div>
            <h3 className="blog-title">Sound Sculpting for Science</h3>
            <p className="blog-description">
              Periyar Science and Technology Centre - Chennai, Tamil Nadu India
            </p>
            <button className="arc-btn--base arc-btn arc-btn-sm d-block ms-auto">
              Read more
            </button>
          </div>
        </div>
        <div className="mb-4 gap-4 d-flex border-bottom">
          <div>
            <p className="calender-event-date">Dec 29, 2024</p>
          </div>
          <div>
            <h3 className="blog-title">Cultural Textiles Showcase</h3>
            <p className="blog-description">
              Short overview of the event with summarized details of the event
              with
            </p>
            <button className="arc-btn--base arc-btn arc-btn-sm d-block ms-auto">
              Read more
            </button>
          </div>
        </div>
        <div className="mb-4 gap-4 d-flex border-bottom">
          <div>
            <p className="calender-event-date">Dec 31, 2024</p>
          </div>
          <div>
            <h3 className="blog-title">How to Create Effective Web Designs</h3>
            <p className="blog-description">
              Short overview of the event with summarized details of the event
              with
            </p>
            <button className="arc-btn--base arc-btn arc-btn-sm d-block ms-auto">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default LatestEvents
