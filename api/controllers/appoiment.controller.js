import Appoiment from "../model/Appoiment.model.js";
import { errorHandler } from "../utils/error.js";





export const createAppoiment = async (req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403,"Only Admin Can Create Appoiment"));
    }
    if(!req.body.firstname || !req.body.lastname || !req.body.gender || !req.body.tnumber || !req.body.email || !req.body.nic || !req.body.address || !req.body.medinote){
        return next(errorHandler(400,"Please fill all required fields"));
    }
    const slug =req.body.firstname.split(" ").join("_").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "");

    const newAppoiment = new Appoiment({
        ...req.body,slug,userId: req.user.id });
    
     try {
        const createAppoimnrt =await newAppoiment.save();
        res.status(201).json({message:"Appoiment created successfully",createAppoimnrt});

     } catch (error) {
        next(error);
     }   
}


export const getAppoiment = async(req,res,next)=>{
    try{
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit =parseInt(req.query.limit) || 9;
    const sortDirection =req.query.order === 'asc' ? 1 :-1;

    const query ={};

    if(req.query.userId){
        query.userId=req.query.userId;
    }
    if(req.query.gender){
        query.gender=req.query.gender;
    }
    if(req.query.tnumber){
        query.tnumber=req.query.tnumber;
    }
    if(req,query.firstname){
        query.firstname=req.query.firstname;
    }
    if(req.query.lastname){
        query.lastname=req.query.lastname;
    }
    if(req.query.email){
        query.email=req.query.email;
    }
    if(req.query.nic){
        query.nic=req.query.nic;
    }
    if(req.query.address){
        query.address=req.query.address;
    }
    if(req.query.slug){
        query.slug=req.query.slug;
    }
    if(req.query.medinote){
        query.medinote=req.query.medinote;
    }
    if(req.query.birthday){
        query.birthday=req.query.birthday;
    }
    if(req.query.appoimentId){
        query._id = req.query.appoimentId;
    }
    if(req.query.searchTerm){
        query.$or =[
            {firstnames:{$regex:req.query.searchTerm,$options:'i'}},
            {lastnames:{$regex:req.query.searchTerm,$options:'i'}},
            {email:{$regex:req.query.searchTerm,$options:'i'}},
            {nic:{$regex:req.query.searchTerm,$options:'i'}},
            {address:{$regex:req.query.searchTerm,$options:'i'}},
            {medinote:{$regex:req.query.searchTerm,$options:'i'}},
            {slug:{$regex:req.query.searchTerm,$options:'i'}},
            {tnumber:{$regex:req.query.searchTerm,$options:'i'}},
            {birthday:{$regex:req.query.searchTerm,$options:'i'}},
            {gender:{$regex:req.query.searchTerm,$options:'i'}},

        ]
    }

    const appoiment =await Appoiment.find(query).sort({createdAt:sortDirection}).limit(limit).skip(startIndex);
    
    const totalAppoiment =await Appoiment.countDocuments(query);

    const now = new Date();
    const oneMonthAgo=new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const lastonthAppoiment=await Appoiment.countDocuments({
        createdAt:{$gte:oneMonthAgo}
    });

    res.status(200).json({appoiment,totalAppoiment,lastonthAppoiment});
}
catch(error){
    next(error);
}

}

export const getUpdate = async (res,req,next)=>{
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this post'));
      }
      try{
        const getUpdatePatient =await Appoiment.findByIdAndUpdate(req.params.apoimentId, 
             { 
                $set: {
                    firstnames:req.body.firstnames,
                    lastnames:req.body.lastnames,
                    gender:req.body.gender,
                    tnumber:req.body.tnumber,
                    email:req.body.email,
                    nic:req.body.nic,
                    address:req.body.address,
                    medinote:req.body.medinote,
                    slug:req.body.slug,
                    birthday:req.body.birthday
                },
            },
                {new:true}
              );
             res.status(200).json(getUpdatePatient); 
      }
      catch(error){
        next(error);
      }
}