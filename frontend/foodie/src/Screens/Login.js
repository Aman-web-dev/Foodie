import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from "../components/Context"

function Login() {
  const navigate = useNavigate();



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");


  const dataFetch = async (e) => {


    e.preventDefault()
    const data = { email: email, password: password }

    const response = await fetch("http://localhost:5000/api/login", {

      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },


      
    })

    if (!response.ok) {
      setError("Wrong Credentials")
      console.log(response.error)
      console.log('oops')
    }

    if (response.ok) {

      const result = await response.json();
      console.log('result', result)
      localStorage.setItem("useremail",email)      
      setEmail('');
      setPassword('')
      localStorage.setItem("authToken",result.authToken);
      console.log("auth token heree ",localStorage.getItem('authToken'))
      navigate('/')
    }
  }


  return (
    
  <AppContext.Provider value={email}>


      {error && (<div className="alert d-absolute vh-10 vw-80 alert-danger" role="alert">{error}</div>)}
      <div>
        <form className="row g-3 container my-5 mx-auto border rounded" >

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary my-5 d-flex justify-content-center" onClick={dataFetch} >Sign in</button>
          </div>

        </form>

      </div>
      </AppContext.Provider>



  )
}

export default Login
