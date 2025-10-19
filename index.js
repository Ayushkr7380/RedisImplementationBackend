import app from "./app.js"
import mongoDBConfig from "./Config/mongo.config.js";
const PORT = process.env.PORT || 3010;


app.listen(PORT,async()=>{
    console.log(`server is running at port ${PORT}`);
    await mongoDBConfig();
})