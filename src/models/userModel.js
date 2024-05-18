import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
username:{
    type:String,
    unique:true,
    required:[true ,'please provide a username']
}, 

email:{
    type:String,
    required:[true , 'please provide an email'],
    unique:true

},
password:{
    type:String,
    required:[true , 'please provide a password']
},
isVerified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean,
    default:false
},
forgotPasswordToken:String,
forgotPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry:Date
})


const user = mongoose.models.validUsers || mongoose.model('validUsers', userSchema)

export default user;