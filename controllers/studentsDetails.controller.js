import { Students } from "../models/students.model.js"

export const alldata = async(req,res)=>{
    
    const studentDetails = await Students.find();

    if(!studentDetails){
        return res.status(404).json({
            success:false,
            message:"Failed to retreive details.Please try again!"
        })
    }


    res.status(200).json({
        success:true,
        message:"Student details fetched successfully.",
        studentDetails
    })
}

export const studentByGender = async(req,res)=>{
    const { gender } = req.params;

    const data = await Students.find({gender});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on gender.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on gender.",
        data
    })
}

export const studentByBranch = async(req,res)=>{
    const { branch } = req.params;

    const data = await Students.find({branch});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on branch.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on branch.",
        data
    })
}

export const studentByCurrentYear = async(req,res) =>{
    const { currentYear } = req.params;

    const data = await Students.find({currentYear});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on current year.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on current year.",
        data
    })
}

export const studentByDuration = async(req,res)=>{
    const { duration } = req.params;

    const data = await Students.find({duration});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on duration.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on duration.",
        data
    })
}

export const studentByAdmissionYear = async(req,res)=>{
    const { admissionYear } = req.params;

    const data = await Students.find({admissionYear});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on admission year.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on admission year.",
        data
    })
}

export const studentByFilters = async(req,res) =>{

    const { gender , branch , currentYear , duration , admissionYear } = req.query;

    let results = {};

    if(gender) results.gender = gender;
    if(branch) results.branch = branch;
    if(currentYear) results.currentYear = currentYear;
    if(duration) results.duration = duration;
    if(admissionYear) results.admissionYear = admissionYear;

    const filteredData = await Students.find(results);

    if(!filteredData){
        return res.status(400).json({
            success:false,
            message:"Failed to retreive students details based on filters.Please try again!"
        })
    }

    res.status(200).json({
        success:true,
        message:"Students details retrived based on filters.",
        filteredData
    })

}