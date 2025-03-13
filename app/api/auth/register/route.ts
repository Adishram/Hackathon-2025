import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { hash } from "bcrypt"
import { sign } from "jsonwebtoken"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json()

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const result = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    // Create JWT token
    const token = sign(
      {
        id: result.insertedId,
        email,
        name: `${firstName} ${lastName}`,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    )

    // Return success with token
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: result.insertedId,
        email,
        name: `${firstName} ${lastName}`,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

