import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Corosoul from '../components/Corosoul';


export default function Home() {

const arr=["pizza","burger","steak","noodles","salad","taco","pie","hot dog","beer"]



  return (
<>

<Corosoul/>
    
<div className="container">
      <div className="row">
 {arr.map((elem)=>(
         <div className="col-md-4 my-3">
 <Card name={elem} image={`https://source.unsplash.com/random/300×300/?${elem}`}/>
                </div>
 ))}
      </div>
 </div>

 </>
  )
}



