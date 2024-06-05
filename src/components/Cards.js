import React from 'react'
import PropTypes from 'prop-types'
import '../styles/styles.css';

function cards(props) {
  return (
    <>
    < div className="cards-container" >
  <div className="card" >
  <img className='cardimage' src="images/page.png" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>What to order</b></h5>
    <p className="card-text">Get accurate demand and days to stock 
    out.Automate purchasing
     planning so
     you can always have
      what you need for 
     your next sales cycle</p>
 
  </div>
  </div>


<div className="card" >
  <img className='cardimage' src="images/bag.png" alt="..."/>
  < div className="card-body">
    <h5 className="card-title"><b>When to order</b></h5>

    <p className="card-text">Have up-to date inventory,storage,
    sales velocity, and demand.Get timely
    order suggestions so you're never left
    guessing.
    </p>
 
     </div>
    </div>
      
<div className="card" >
  <img className='cardimage' src="images/stock.png" alt="..."/>
  < div className="card-body">
    <h5 className="card-title"><b>How much to stock</b></h5>
    <p className="card-text">Get inventory requirements for every
     node, for every SKU. So you avoid out-
     of-stock situationss,even during demand spikes.</p>
     </div>
     </div>


     <div className="card" >
  <img className='cardimage' src="images/home.png" alt="..."/>
  < div className="card-body">
    <h5 className="card-title"><b>Where to place</b></h5>
    <p className="card-text">Our tools suggests how to move stock
     within your supply chain.so you'll 
     always have products available accross cities.</p>
     </div>
     </div>
</div>
   </>
  )
}

cards.propTypes = {

}

export default cards

