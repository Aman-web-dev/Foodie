const mongoose = require('mongoose');





const { Schema }= mongoose;

const cartSchema = new Schema(

    {
    
        useremail:{
    
            type:String,
            required:true,
            unique:true,
        },
        cart:[

            {

            foodid:{
             type:String,
             required:true,
             unique:false,
            },
            quantity:{
                type:String,
                required:true,
                unique:false,
            },
            
            price:{
                type:String,
                required:true,
                unique:false,
            }
        }
        ]
    }
    )
    
    const foodCart = mongoose.model('foodCart',cartSchema);
    
    
    module.exports =foodCart;   