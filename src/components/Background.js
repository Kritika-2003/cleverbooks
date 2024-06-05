import React from 'react'
import PropTypes from 'prop-types'
import '../styles/styles.css';

function background(props) {
  return (
    <div className="background-container">
     <img className="hero" src="images/back.png" alt="description of image" />
    </div>
  )
}

background.propTypes = {

}

export default background

