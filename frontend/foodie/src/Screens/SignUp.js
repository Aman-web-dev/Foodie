import React, { useState } from "react";


function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address,setAddress]=useState('')
  const [address2,setAddress2]=useState('')
  const [city,setCity]=useState('')
  const [state,setState]=useState('')
  const [pinCode,setPinCode]=useState('')
  const [location,setLocation]=useState('')
  const [error, setError] = useState("");
  console.log(name, email, password,location)



  const handleSubmit = async (e) => {
    e.preventDefault();

  console.log(name, email, password,location)


    const addUser = { name, location, email, password };

    if (!name || !email || !password || !location ) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await fetch("http://localhost:5000/api/create", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },

    });

    const result = await response.json()
console.log('this is the error ',result)
setError(response.msg)


    if (!result.ok) {
      // const result = await response.json();
      const errorMessage = result.errors || "An error occurred.";

      console.log('this is error of the error ', errorMessage)
      setError(errorMessage);
      console.log('this is error', errorMessage);

    } if (response.ok) {
    console.log("Fetched");

    setError("");
    setEmail("");
    setPassword("");
    setName("");
    setAddress("");
    setAddress2("");
    setPinCode("");
    setCity("");
    setState("");
    
    
      setLocation("");
      console.log("User added successfully");

    }

  };


  return (
    <>

  {error && (<div  className="alert d-absolute vh-10 vw-80 alert-danger" role="alert">{error}</div>)}

<form className="row g-3 container my-5 mx-auto border rounded " onSubmit={handleSubmit}>


<div className="col-12">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>


  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" value={address}  name="addressLine1" onChange={(e)=>setAddress(e.target.value)}/>
  </div>


  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control"value={address2}  name="addressLine2" onChange={(e)=>setAddress2(e.target.value)} />
  </div>






  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" value={city}  name="city" onChange={(e)=>setCity(e.target.value)}/>
  </div> 




  <div className="col-md-4">
    <label  className="form-label">State</label>
    <select  className="form-select" value={state} name="state" onChange={(e)=>setState(e.target.value)}>
      <option value="">Choose...</option>
      <option value="Delhi">Delhi</option>
      <option value="UP">UP</option>
      <option value="GOA">GOA</option>
      <option value="Maharastra">Maharastra</option>

    </select>
  </div>




  <div className="col-md-2">
    <label className="form-label">Pin Code</label>
    <input type="number" className="form-control" maxLength={6} value={pinCode} name="pinCode" onChange={(e)=>setPinCode(e.target.value)}  />
  </div>



  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  required/>
      <label className="form-check-label" >
      I agree to All the Terms and Conditions Given By Foodie.  
      </label>
    </div>
  </div> 



  <div className="col-12">
    <button type="submit" className="btn btn-primary my-5 d-flex justify-content-center" onClick={()=> setLocation(`${address},${address2},${city},${state},${pinCode}`)}>Sign in</button>
  </div>
</form>

    </>
  )
}


export default SignUp;