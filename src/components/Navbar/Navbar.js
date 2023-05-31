import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
  FaAppStore,
} from "react-icons/fa";
import { HiOutlineDocumentText, HiPencilAlt } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar__brand">
        <h2>Educator</h2>
        <p className="navbar__subtitle">Arthshala</p>
      </div>

      <div
        className={`navbar__menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <div className="li-item">
              <span className="li_icon">
                <AiFillAppstore />
              </span>
              <div className="li-text">Planning</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/documentation" activeClassName="active">
            <div className="li-item">
              <span className="li_icon">
                <HiPencilAlt />
              </span>
              <div className="li-text">Documentation</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/housekeeping" activeClassName="active">
            <div className="li-item">
              <span className="li_icon">
                <HiOutlineDocumentText />
              </span>
              <div className="li-text">Housekeeping</div>
            </div>
          </NavLink>
        </li>
      </ul>

      <div className="navbar__right">
        <FaSearch className="navbar__icon" />
        <FaBell className="navbar__icon" />
        <div className="navbar__user">
          <div className="navbar__user-circle">
            <FaUser className="navbar__user-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
