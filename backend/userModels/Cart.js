const mongoose = require('mongoose');





const { Schema }= mongoose;

const cartSchema = new Schema(

    {
    
        userid:{
    
            type:String,
            required:true,
            unique:false,
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
    
    const Cart = mongoose.model('Cart',cartSchema);
    
    
    module.exports =Cart;