import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
// do below instead
// import logo from '../images/logo-designcode.svg';

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={ require('../images/logo-designcode.svg') } alt="design+code" width="30"/></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/shop"><button>Shop</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
