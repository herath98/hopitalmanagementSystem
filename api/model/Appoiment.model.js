import mongoose from 'mongoose';


const appoimentSchema = new mongoose.Schema({ 
    firstname: {
        type:String,
        required: true,
       

    },
    lasyname:{
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
},
{timestamps:true}
);

const Appoiment = mongoose.model('Appoiment', appoimentSchema);
export default Appoiment;