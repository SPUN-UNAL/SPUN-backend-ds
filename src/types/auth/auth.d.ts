import mongoose, { Document } from 'mongoose';

// Database models interfaces
export interface UserInterface extends Document {
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
  }

export interface UserRegisterInterface{
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
}

export interface UserLoginInterface{
    email: string;
    password: string;
}

export interface DecodedTokenInterface{
    id: string;
}

export interface AuthSuccessInterface{
    token: string;
    id: mongoose.Types.ObjectId;
    username: string;
    email: string;
    isAdmin: boolean;
    isVerified: boolean;
}
