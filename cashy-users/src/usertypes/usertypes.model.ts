import * as mongoose from 'mongoose';

export const UserTypeSchema = new mongoose.Schema({
    idUserType : String,
    userTypeDescription : String,
});

export interface UserType extends mongoose.Document{
    idUserType : string;
    userTypeDescription : string;
}