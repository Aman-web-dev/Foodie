import { set } from 'mongoose';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



function Card(props) {


  const { options } = props;
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(Object.keys(options)[0])
  const [price, setPrice] = useState(options[size])
  const [cartButton,setCartButton]=useState('Add To Cart')
  const [btnDisaable,setBtnDisabled]=useState(false)




const addToCart=async(id)=>{
  
setCartButton("Adding To Cart ...")
setBtnDisabled(true); 
setTimeout(()=>{setCartButton("Added to Cart");},2000)    
}
  




  const cardStyle = {
    width: "21rem",
    height: "40rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    transition: "transform 0.2s ease-in-out", 
  };

  const calculatePrice = (size, quantity) => {
    setPrice(quantity * options[size])
    global.totalPrice=price;
    console.log('price', price)
  }

  
  useEffect(() => {
    calculatePrice(size, quantity);
  }, [size, quantity]);


  const handleSizeChange = (e) => {
    console.log(e.target.value)
    setSize(e.target.value)
    console.log("size", size)
  }



  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(val);
    console.log("quantity", quantity)
  }


  return (
    <div key={props.key} className="my-3" >
      <div className="card my-card" style={cardStyle}>
        <img src={props.image} style={{ "width": "20rem", "height": "15rem" }} className="card-img-top m-2" alt="..." />
        <div className="card-body" style={{ "width": "20rem", "height": "8rem" }}>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">₹ {price}</li>
          <li className="list-group-item">Category  :- {props.category}</li>
          <li className="list-group-item">{
            <select onChange={handleSizeChange} id="inputState" className="form-select">
              {Object.keys(options).map((key) => (

                <option key={key} value={key} >
                  {key.toUpperCase()}
                </option>
              ))}
            </select>}
            <select id="inputState" className="form-select my-2" value={quantity} onChange={handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>


            </select></li>




        </ul>
        <div className="card-body d-flex align-items-center justify-content-center">
  <button type="button" className="btn  btn-primary mx-1 d-flex align-items-center justify-content-center">
    <Link to="#" className="card-link" style={{ "textDecoration": "none", "color": "inherit" }}>Buy Now</Link>
  </button>

  <button type="button" disabled={btnDisaable} className="btn btn-primary  mx-1 d-flex align-items-center justify-content-center" onClick={addToCart}>
    <Link to="#" className="card-link"  onClick={props.addToCart} style={{ "textDecoration": "none", "color": "inherit" }}>{cartButton}</Link>
  </button>
</div>

      </div>
    </div>
  )
}

export default Card



