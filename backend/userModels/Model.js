const  mongoose  = require("mongoose");

const userDataSchema= new mongoose.Schema(

    {
        CategoryName:{
            type:String,
            unique:true,
            require:true
        },

        name:{
            type:String,
            unique:true,
            require:true,
        },

        img:{
           type:String,
           unique:false,
           require:true,
        },

        options:[
             
            {
                half:{
                    type:Number,
                    unique:false,
                    require:true
                },

                full:{
                    type:Number,
                    unique:false,
                    require:true
                }

            }

        ],

        discriptions:{
            type:String,
            unique:true,
            require: true
        }
    },
    {timestamps:true},
)



const userData= mongoose.model("userData",userDataSchema);

module.exports=userData;