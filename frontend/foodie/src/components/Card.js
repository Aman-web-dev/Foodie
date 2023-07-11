import React from 'react'
import { Link } from 'react-router-dom'
function Card(props) {
  return (
    <div>
      <div className="card " style={{"width": "18rem", "height":"45rem"}}>
  <img src={props.image} style={{"width": "17rem", "height":"20rem"}} className="card-img-top m-2" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price</li>
    <li className="list-group-item">Address</li>
    <li className="list-group-item">Origin</li>
  </ul>
  <div className="card-body">


<button type="button" className="btn btn-sm btn-primary  mx-1">
<Link to="#" className="card-link" style={{ "textDecoration": "none", "color": "inherit" }}>Buy Now</Link>
</button>

<button type="button" className="btn btn-primary btn-sm mx-1">
<Link to="#" className="card-link" style={{ "textDecoration": "none", "color": "inherit" }}>Add To Cart</Link>
</button>

  </div>
</div>
    </div>
  )
}

export default Card



