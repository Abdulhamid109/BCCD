import mongoose from "mongoose";


const labmodal = new mongoose.Schema({
    labname:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: [true, 'Emnail Required'],
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true,'Password is required'],
    },
    address:{
        type: String,
        required:[true, 'address is required']
    }
});

const labs = mongoose.models.lab || mongoose.model('lab',labmodal);
export default labs;