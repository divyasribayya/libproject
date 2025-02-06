import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grocerylogo from "../../images/Grocerylogo.png";
import menubanner from "../../images/menu-banner.jpg";
import { servicesData } from "../../utils/constants";
import Modal from "./Modal";
import styled from "styled-components"; // Import styled-components

const NavbarWrapper = styled.nav`
  .navbar-collapse {
    display: ${(props) => (props.isOpen ? "block" : "none")} !important;
  }

  .navbar-toggler {
    cursor: pointer;
  }

  .containerr {
    // display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 25px;
    height: 3px;
    background-color: #fff;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  @media (min-width: 992px) {
    .navbar-collapse {
      display: flex !important;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    
        <><NavbarWrapper isOpen={isOpen} className="navbar navbar-expand-lg navbar-light sticky-top">
          <div className="container">
              <Link className="navbar-brand" to="/Gowrish/">
                  <img
                      src={Grocerylogo}
                      style={{ width: 200, marginBottom: 10, marginLeft: "-15px" }}
                      alt="eCommerce HTML Template" />
              </Link>
              {/* <input
                  className="form-control responsivesearch"
                  placeholder="Type to search..."
                  style={{ width: "35%" }} /> */}

              <button className="navbar-toggler" type="button" onClick={handleClick}>
                  <div className={`containerr ${isOpen ? "change" : ""}`}>
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                  </div>
              </button>

              <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mobile_nav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="/Gowrish/">Home</Link>
                      </li>

                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="#" onClick={() => setIsOpen(false)}>
                              All Departments
                          </Link>
                          <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/Shop">Dairy, Bread & Eggs</Link>
                              <Link className="dropdown-item" to="/Shop">Snacks & Munchies</Link>
                              <Link className="dropdown-item" to="/Shop">Fruits & Vegetables</Link>
                              <Link className="dropdown-item" to="/Shop">Cold Drinks & Juices</Link>
                          </div>
                      </li>

                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="#">Shop</Link>
                          <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/Shop">Shop</Link>
                              <Link className="dropdown-item" to="/ShopWishList">Shop Wishlist</Link>
                              <Link className="dropdown-item" to="/ShopCart">Shop Cart</Link>
                              <Link className="dropdown-item" to="/ShopCheckOut">Shop Checkout</Link>
                          </div>
                      </li>

                      <li className="nav-item dropdown megamenu-li">
                          <Link className="nav-link dropdown-toggle" to="/Shop">
                              All Services
                          </Link>
                          <div className="dropdown-menu">
                              <div className="row">
                                  {servicesData.map((service, index) => (
                                      <div key={index} className="col-sm-6 col-lg-3">
                                          <h6 className="text-primary">{service.category}</h6>
                                          {service.items.map((item, itemIndex) => (
                                              <Link key={itemIndex} className="dropdown-item" to="/Shop">
                                                  {item}
                                              </Link>
                                          ))}
                                      </div>
                                  ))}
                                  <div className="col-sm-6 col-lg-3">
                                      <img src={menubanner} style={{ width: "90%" }} alt="Offer" />
                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </NavbarWrapper><Modal /></>
      
  );
};

export default Navbar;
