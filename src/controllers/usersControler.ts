import {db } from "../db/config/db";
import { sendServerError } from "../Responses/sendError";


export const getUsersController =  async() =>{
    try{
        const result = await db.query.users.findMany();
    

        // console.log("req data objects---->",JSON.stringify(result))
        const result2 = await db.query.users.findMany(
            {
                with: {
                  posts:{
                    with: {
                      comments: true, // Fetch comments for each post
                    },
                  
                },
              }
            }
        );
        console.log("result--->", JSON.stringify(result2))
        return result2
    }catch(error){
        sendServerError(error)
    }
   
    
}