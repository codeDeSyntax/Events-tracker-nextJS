import { connect } from "../../../dbConfig/dbconfig";
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email , password } = reqBody;

    const registeredUser = await User.findOne({ email});
    const isPasswordValid = await bcryptjs.compare(password,registeredUser.password);
    

    if (registeredUser && isPasswordValid) {
      console.log("logging in"  + registeredUser);
      return NextResponse.json(
      {
        message: "user logged in successfully",
        status: 201,
        success: true,
      }
      );
    }
  } catch (error: any) {
    console.log(`${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
