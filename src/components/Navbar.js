import React from 'react'
import PropTypes from 'prop-types'
import '../styles/styles.css';

function navbar(props) {
  return (
    
      <div className="section1">
    <nav className="navbar navbar-expand-lg bg-body-dark custom-navbar">
        <div className="container-fluid">
            <img src="images/logo.png" alt="description of image" className="navbar-brand"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav">
                    <li className="nav-item me-4">
                        <a className="nav-link active" aria-current="page" href="#">Product
                        </a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item me-4">
            
                        <a className="nav-link" href="#">CustomerStories</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link1" href="#">Login</a>
                    </li>
                </ul>
                <button className="btn btn-outline-success btn-lg" type="submit"><b>Talk  To  Us</b></button>
            </div>
        </div>
    </nav>
</div> 

  )
}



export default navbar

