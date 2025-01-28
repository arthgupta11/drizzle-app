import { eq } from "drizzle-orm";
import {db } from "../db/config/db";
import { users } from "../db/schema";
import { sendServerError } from "../Responses/sendError";


export const getUsersController =  async() =>{
    try{
        // const result = await db.query.users.findMany();
    

        // console.log("req data objects---->",JSON.stringify(result))
        const result = await db.query.users.findMany(
            {
              limit: 5,
              offset: 2,
              with: {
                  posts:{
                    with: {
                      comments: true, // Fetch comments for each post
                    },
                  
                },
              }
            },
            
        );
        console.log("result--->", JSON.stringify(result))
        return result
    }catch(error){
        sendServerError(error)
    }
}

export const getUsersByIdController =  async(_: unknown, {id}:{id : number}) =>{
  try{
      // const result = await db.query.users.findMany();
  

      // console.log("req data objects---->",JSON.stringify(result))
      const user = await db.query.users.findMany(
          {
            where:  eq(users.id, id),
            with: {
                posts:{
                  with: {
                    comments: true, // Fetch comments for each post
                  },
                
              },
            }
          },
          
      );
      console.log("result--->", JSON.stringify(user))
      return user
  }catch(error){
      sendServerError(error)
  }
}