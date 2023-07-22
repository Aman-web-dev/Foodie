const express = require('express');



const router = express.Router()


router.post('/load',async(req,res)=>{

try{

    console.log(global.foodItems)
      res.send([global.foodItems])

}
catch(error){

console.error(error)
res.send('server Error')
}


})


module.exports =router; 