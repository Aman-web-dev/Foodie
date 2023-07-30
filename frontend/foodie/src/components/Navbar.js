import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();
  const currentPage = location.pathname;
  console.log(currentPage)
  const [button, setButton] = useState('Log-In')
  const [order, setOrder] = useState('')

  const navbarLogic = () => {

    if (currentPage == '/') {
      setButton('')
    }
  }



  useEffect(() => { }, [])
  return (


    <>

      <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Foodie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">{order}</Link>
              </li>
            </ul>
       


              {(localStorage.getItem('authToken')) ?

                <form className="d-flex" role="search">

                  <button type="button" className="btn mx-2 btn-primary">
                    <Link className="" onClick={()=>(localStorage.removeItem('authToken'))} style={{ "textDecoration": "none", "color": "inherit" }}>Log-Out</Link>
                  </button>

                  <button type="button" className="btn mx-2 btn-success">
                    <Link className="" to="/cart" style={{ "textDecoration": "none", "color": "inherit" }}><span className="material-symbols-outlined">
shopping_cart
</span></Link>
                  </button>

                </form>



                :

                <form className="d-flex" role="search">

                  <button type="button" className="btn mx-2 btn-primary">
                    <Link className="" to="/login" style={{ "textDecoration": "none", "color": "inherit" }}>Log-In</Link>
                  </button>

                  <button type="button" className="btn mx-2 btn-success">
                    <Link className="" to="/signup" style={{ "textDecoration": "none", "color": "inherit" }}>Sign-Up</Link>
                  </button>

                </form>

              }



          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
