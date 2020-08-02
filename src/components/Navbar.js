import React from "react"
import { Link } from "gatsby"
import logo from "../assets/grannies_for_masks.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button onClick={toggleSidebar} type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
