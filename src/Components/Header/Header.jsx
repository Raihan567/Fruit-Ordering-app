import React, { useRef } from "react";
import logo from "../../../public/fav-icon.png";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "../../Styles/Header.css";

// Nav links are created
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Fruits",
    path: "/all-fruits",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center  gap-1">
            <img className="img-fluid" src={logo} alt="" />
            <h5>
              <Link to="/home">Fruitsify</Link>
            </h5>
          </div>

          {/* =========== menu ======= */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/*======== Nav right Icon ============ */}
          <div className="nav__right d-flex gap-3">
            <span className="cart__icon">
              <Link to="/cart">
                <i className="ri-shopping-bag-line"></i>
              </Link>
              <span className="cart__badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-fill"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;