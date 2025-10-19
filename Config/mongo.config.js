import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URI;

const mongoDBConfig = async()=>{

    try{
        const connection = await mongoose.connect(mongo_url);
        if(!connection){
            console.log(`Failed MongoDB connection.Please try again!`);
        }else{
            console.log(`Connected to database ${mongoose.connection.name} on ${mongoose.connection.host}`);
        }
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}

export default mongoDBConfig;