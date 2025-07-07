import { AsyncHandler } from "../utils/AsyncHandler.js";
import { users } from "../constant/constant.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const fetchUsers=AsyncHandler(async (req, res)=>{
    return res
    .status(200)
    .json(new ApiResponse(200,users,"success"))
    

})
export {fetchUsers}