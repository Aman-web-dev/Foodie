const mongoose=require('mongoose');

const { Schema } = mongoose ;

const userSchema = new Schema(

{

    name:{

        type:String,
        required:true,
        unique:false,
    },
    
    location:{

        type:String,
        required:true,
        unique:false,
    },


    email:{

        type:String,
        required:true,
        unique:true,
    },
    password:{

        type:String,
        required:true,
        unique:false,
    },

}

)

const User = mongoose.model('User',userSchema);


module.exports =User;