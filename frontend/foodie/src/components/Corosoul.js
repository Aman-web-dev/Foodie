import React, { useEffect } from 'react';



// import { Link } from 'react-router-dom';
import { useState } from 'react';

function Corosoul() {


  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide vh-70" data-bs-ride="carousel">
        <div className="carousel-inner vh-70 h-70">

          <div className="carousel-caption" style={{ "zIndex": "1" }}>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

          </div>
          <div className="carousel-item active" style={{ "height": '70vh' }}>
            {/* <img src={`https://source.unsplash.com/random/300×300?burger`} className="d-block w-100 vh-70" alt="..." /> */}
          </div>
          <div className="carousel-item" style={{ "height": '70vh' }}>
            {/* <img src={`https://source.unsplash.com/random/300×300?fries`} className="d-block w-100 vh-70" alt="..." /> */}
          </div>
          <div className="carousel-item" style={{ "height": '70vh' }}>
            {/* <img src={`https://source.unsplash.com/random/300×300?soup`} className="d-block w-100 vh-70" alt="..." /> */}
          </div>



        </div>
      </div>

    </>
  )
}

export default Corosoul
