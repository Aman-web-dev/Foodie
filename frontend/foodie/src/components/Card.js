import React from 'react'
import { Link } from 'react-router-dom';



function Card(props) {

  const { options } = props;


  return (
    <div key={props.key}>
      <div className="card " style={{ "width": "21rem", "height": "45rem" }}>
        <img src={props.image} style={{ "width": "20rem", "height": "15rem" }} className="card-img-top m-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price:- {props.price}</li>
          <li className="list-group-item">Category  :- {props.category}</li>
          <li className="list-group-item">{ <select>
      {Object.keys(options).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>}</li>
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



