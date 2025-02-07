import { NextResponse } from 'next/server';

interface UserData {
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: UserData) => {
    const { username, email, password } = userData;

    // Basic validation
    if (!username || !email || !password) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Simulate saving user data (replace with actual database logic)
    console.log('User registered:', { username, email, password });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
};
