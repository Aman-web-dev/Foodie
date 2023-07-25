const mongoose = require('mongoose');





const { Schema }= mongoose;

const cartSchema = new Schema(

    {
    
        id:{
    
            type:String,
            required:true,
            unique:true,
        },
        
        price:{
            type:String,
            required:true,
            unique:false,
        }
    
    }
    
    )
    
    const Cart = mongoose.model('Cart',cartSchema);
    
    
    module.exports =Cart;