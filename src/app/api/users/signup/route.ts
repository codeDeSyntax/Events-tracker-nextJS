import { connect } from "../../../dbConfig/dbconfig";
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, username } = reqBody;

    const trueUser = await User.findOne({ email });
    console.log("SIGNININ UP USER");
    if (trueUser) {
      console.log("User already exist");
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user created successfully",
      status: 201,
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.log(`${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
