import { connect } from "@/Dbconfig/dbconfig";
import User from "@/models/labmodal";
import { NextRequest ,NextResponse} from "next/server";
import bcrypt from 'bcrypt';
import labs from "@/models/labmodal";

connect();

interface labdata{
    labname:string;
    address:string;
    email:string;
    password:string;
}
export async function POST(request:NextRequest) {
    try {
        const req = await request.json();
        const {labname,address,email,password}:labdata = req;
        //check if user exists or not
        const ispresent = await User.findOne({email});
        console.log(ispresent);
        
        if(ispresent){
            console.log("lab already exists ,login");
            return NextResponse.json(
                {error:"Lab Acount already exists"},
                {status:404}
            )
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // create a new lab account

        const mylab = new labs({
            labname,
            address,
            email,
            password:hashedPassword
        })
        
        const savedlab = await mylab.save();

        return NextResponse.json(
            {success:true ,message:"successfully created the account",labdata:savedlab},
            {status:200}
        );


    } catch (error) {
        console.log("Something went wrong!!"+String(error));
        return NextResponse.json(
            {error:"Something went wrong!!"},
            {status:500}
        )
        
    }
}