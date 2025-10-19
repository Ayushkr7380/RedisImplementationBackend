import { Schema , model } from "mongoose";

const StudentsSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    rollnumber:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },
    branch:{
        type:String,
        trim:true,
        required:true
    },
    currentYear:{
        type:String,
        trim:true,
        required:true
    },
    duration:{
        type:String,
        trim:true,
        required:true
    },
    admissionYear:{
        type:Number,
        trim:true,
        required:true
    }

})

export const Students = model("Students",StudentsSchema);