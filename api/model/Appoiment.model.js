import mongoose from 'mongoose';


const appoimentSchema = new mongoose.Schema({ 
    userId:{
        type:String,
        required:true,
    },
    firstname: {
        type:String,
        required: true,
       

    },
    lastname:{
        type:String,
        required: true,
    },
    gender:{
        type:String,
        required: true,
       
    },
    tnumber:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    nic:{
        type:String,
        required: true,
        unique: true,
        
    },
    address:{
        type:String,
        required: true,
    },
    medinote:{
        type:String,
        required: true,
    },
    slug:{
        type:String,
        required:true,
    },
    birthday: {
        type: Date,
        required: true,
    },
},
{timestamps:true}
);

const Appoiment = mongoose.model('Appoiment', appoimentSchema);
export default Appoiment;