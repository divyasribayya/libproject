import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar } from "react-bootstrap";

import productimage1 from '../../images/product-img-1.jpg'
import productimage2 from '../../images/product-img-2.jpg'
import productimage3 from '../../images/product-img-3.jpg'
import productimage4 from '../../images/product-img-4.jpg'
import productimage5 from '../../images/product-img-5.jpg'
// Styled Components


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
   
      
    <div>
    {/* Modal */}
    <div
      className="modal fade"
      id="userModal"
      tabIndex={-1}
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
              Sign Up
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email address"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  required
                />
                <small className="form-text">
                  By Signup, you agree to our{" "}
                  <Link to="#!">Terms of Service</Link> &amp;{" "}
                  <Link to="#!">Privacy Policy</Link>
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            Already have an account? <Link to="/MyAccountSignIn">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
    {/* Shop Cart */}
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="alert alert-danger" role="alert">
          You’ve got FREE delivery. Start checkout now!
        </div>
        <div>
          <div className="py-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item py-3 px-0 border-top">
                <div className="row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage1}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Organic Banana</h6>
                    <span>
                      <small className="text-muted">.98 / lb</small>
                    </span>
                    <div className="mt-2 small">
                      {" "}
                      <Link to="#!" className="text-decoration-none">
                        {" "}
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group  flex-nowrap justify-content-center  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$35.00</span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage2}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Garlic, 250g</h6>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    <div className="mt-2 small">
                      {" "}
                      <Link to="#!" className="text-decoration-none">
                        {" "}
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group  flex-nowrap justify-content-center  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$20.97</span>
                    <span className="text-decoration-line-through text-muted small">
                      $26.97
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage3}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Onion, 1kg</h6>
                    <span>
                      <small className="text-muted">1 kg</small>
                    </span>
                    <div className="mt-2 small">
                      {" "}
                      <Link to="#!" className="text-decoration-none">
                        {" "}
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group  flex-nowrap justify-content-center  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$25.00</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage4}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Ginger</h6>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    <div className="mt-2 small">
                      {" "}
                      <Link to="#!" className="text-decoration-none">
                        {" "}
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group  flex-nowrap justify-content-center  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$39.87</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0 border-bottom">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage5}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">
                      Apple Royal Gala, 4 Pieces Box
                    </h6>
                    <span>
                      <small className="text-muted">4 Apple</small>
                    </span>
                    <div className="mt-2 small">
                      {" "}
                      <Link to="#!" className="text-decoration-none">
                        {" "}
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group  flex-nowrap justify-content-center  ">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$39.87</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
              type="submit"
            >
              {" "}
              Go to Checkout <span className="fw-bold">$120.00</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id="locationModal"
      tabIndex={-1}
      aria-labelledby="locationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between align-items-start ">
              <div>
                <h5 className="mb-1" id="locationModalLabel">
                  Choose your Delivery Location
                </h5>
                <p className="mb-0 small">
                  Enter your address and we will specify the offer you
                  area.{" "}
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="my-5">
              <input
                type="search"
                className="form-control"
                placeholder="Search your area"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Select Location</h6>
              <Link
                to="#"
                className="btn btn-outline-gray-400 text-muted btn-sm"
              >
                Clear All
              </Link>
            </div>
            <div>
              <div data-simplebar style={{ height: 300 }}>
                <div className="list-group list-group-flush">
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active"
                  >
                    <span>Alabama</span>
                    <span>Min:$20</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Alaska</span>
                    <span>Min:$30</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Arizona</span>
                    <span>Min:$50</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>California</span>
                    <span>Min:$29</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Colorado</span>
                    <span>Min:$80</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Florida</span>
                    <span>Min:$90</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Arizona</span>
                    <span>Min:$50</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>California</span>
                    <span>Min:$29</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Colorado</span>
                    <span>Min:$80</span>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                  >
                    <span>Florida</span>
                    <span>Min:$90</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     
  );
};

export default Modal;
