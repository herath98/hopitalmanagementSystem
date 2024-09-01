import Appoiment from "../model/Appoiment.model";
import { errorHandler } from "../utils/error"





export default createAppoiment = async (req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403,"Only Admin can Create Appoiment"));
    }
    if(!req.body.firstname || !req.body.lasyname || !req.body.gender || !req.body.tnumber || !req.body.email || !req.body.nic || !req.body.address || !req.body.medinote){
        return next(errorHandler(400,"Please fill all required fields"));
    }
    const slug =req.body.firstnames.split(" ").join("_").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "");

    const newAppoiment = new Appoiment({
        ...req.body,slug,userId: req.user.id });
    
     try {
        const createAppoimnrt =await newAppoiment.save();
        res.status(201).json({message:"Appoiment created successfully",createAppoimnrt});

     } catch (error) {
        next(error);
     }   
}