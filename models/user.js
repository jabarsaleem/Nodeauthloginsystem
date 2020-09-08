const mongoose= require('mongoose');
const schema= mongoose.Schema;

var User= new schema(

    {
        username:{
    
            type: String,
            required: true,
            unique: true
    
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Boolean,
            defualt:false
        }
       
    }
    );
    
    module.exports = mongoose.model('User', User);
