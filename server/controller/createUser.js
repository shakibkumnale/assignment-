import { AsyncHandler } from "../utils/AsyncHandler.js";
import {ApiResponse} from '../utils/ApiResponse.js'
import validator from 'validator'

import { users } from "../constant/constant.js";
import axios from "axios";
import { ApiError } from "../utils/ApiError.js";




const createdUser= AsyncHandler(async(req, res)=>{
    try {
        
   
    const {firstName, lastName,dob}= req.body;
    if(!firstName || firstName.trim() === "")
    {
        return res
        .status(400)
        .json(
            new ApiResponse(
                400,
                null, 
                "first name is required"
        
            )
        )
    }
        if(!lastName || lastName.trim() === "")
    {
        return res
        .status(400)
        .json(
            new ApiResponse(
                400,
                null, 
                "first name is required"
        
            )
        )
    }
    if( !dob || !validator.isDate(dob)){
        return res
        .status(400)
        .json(
            new ApiResponse(
                400,
                null,
                "Date of birth is required in a valid format (e.g., YYYY-MM-DD)"

            )
        )
    }
 
    const fetchImage= await axios.get(process.env.URL)
     const imageUrl= fetchImage.data.message

      users.push({firstName,lastName,dob,imageUrl})
      return res
      .status(201)
      .json(new ApiResponse(
        201,
        users,
        "new user added successfully"
        

      ))
       } catch (error) {
        console.log(error.message);
        if (error.code === 'ENOTFOUND') {
            throw new ApiError(503, "image not fetch", [error.message], error.stack);
        }
        throw new ApiError(500, "Internal server error", [error.message], error.stack);
    }




})
export { createdUser}