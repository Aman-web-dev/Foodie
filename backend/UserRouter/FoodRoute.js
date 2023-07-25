
const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();



router.get("/loaddata", async (req, res) => {


  try {

    const data = await global.foodItems

    res.send([data])

  }
  catch (error) {

    console.error(error)
    res.send('server Error')
  }


})



module.exports=router;