import React, { useEffect } from 'react';

import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic3 from '../pictures/pic3.jpg';


// import { Link } from 'react-router-dom';
import { useState } from 'react';

function Corosoul() {

    const arr=[pic1,pic2,pic3];
const [img,setImg]=useState(arr[0])
const [count,setCount]=useState(0)


function imgChanger(e) {

if(count+e>-1 && count+e<3){
    setCount(count+e);
    setImg(arr[count]);
}

if(count+e<=-1){
    setCount(2);
    setImg(arr[count]);
}
if(count+e>2){
    setCount(0);
    setImg(arr[count]);
}
  }



  // setInterval(()=>imgChanger(1), 5000);

  return (
    <>
<div id="carouselExampleSlidesOnly" className="carousel slide vh-70" data-bs-ride="carousel">
  <div className="carousel-inner vh-70 h-70">

    <div className="carousel-caption" style={{"z-index":"1"}}>


    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
    <div className="carousel-item active"style={{ "height": '70vh' }}>
      <img src={`https://source.unsplash.com/random/300×300?burger`} className="d-block w-100 vh-70" alt="..." />
    </div>
    <div className="carousel-item" style={{ "height": '70vh' }}>
      <img src={`https://source.unsplash.com/random/300×300?fries`} className="d-block w-100 vh-70" alt="..." />
    </div>
    <div className="carousel-item" style={{ "height": '70vh' }}>
      <img src={`https://source.unsplash.com/random/300×300?soup`} className="d-block w-100 vh-70" alt="..." />
    </div>



  </div>
</div>

    </>
  )
}

export default Corosoul
