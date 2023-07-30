import React, { useEffect, useState } from 'react'
import  Card  from '../components/Card';
import Corosoul from '../components/Corosoul';
import { createGlobalState } from 'react-hooks-global-state';


export default function Home() {

const [info,setInfo]=useState([])
const [loading, setLoading] = useState(true);
const {setGlobalState,useGlobalState}=createGlobalState({})

  const   fetchData = async() =>{
     
  
await fetch('http://localhost:5000/api/loaddata')
.then((response) => response.json())  
.then((result) => {


  setInfo(result[0]);
  console.log(info)

  setLoading(false);
})
.catch((error) => {

  console.error('Error fetching data:', error);
  setLoading(false); 
});

  } 



 useEffect(()=>{
fetchData()


},[])





  return (
<>

<Corosoul/>
    
<div className="container">
      <div className="row">
      {loading ? (
            <p>Loading...</p>
          ) : info.length > 0 ? (
            info.map((elem) => <div className="col-md-4 mb-3" key={elem._id}>
            <Card  key={elem._id} image={elem.img} name={elem.name} id={elem._id} category={elem.CategoryName} description={elem.description} options={elem.options[0]}  />
          </div> )
          ) : (
            <p>No data available.</p>
          )}
   
      </div>
 </div>

 </>
  )
}



