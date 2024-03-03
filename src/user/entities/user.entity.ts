import { Document } from 'mongoose';

export class User extends Document {
    name: string;
    email: string;
    age: number;
    avatar: string;
    password: string;
}
