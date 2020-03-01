import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
// do below instead
// import logo from '../images/logo-designcode.svg';

// non-stateful components

// stateful components
class Header extends React.Component {
  state = {
    hasScrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlescroll)
  }

  // function handlescroll (e) {}
  // need to rewrite because only later than ES6 is allowed
  handlescroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={ require('../images/logo-designcode.svg') } alt="design+code" width="30"/></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/shop"><button>Shop</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
