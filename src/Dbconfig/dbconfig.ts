//connection establishment with the local database
import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect("mongodb://localhost:27017/bccd");
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Successfully connected to the database");
        });
        connection.on('error',(err)=>{
            console.log("Connection Failed to establish "+String(err));
            // connection.close();
            process.exit();
        })
    } catch (error) {
        console.log("Something went Wrong:"+String(error));   
    }
}