import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './usertypes.model';

@Injectable()
export class UserTypesService {
    constructor(@InjectModel('UserType') private readonly userTypesModel: Model<UserType>){}

    async create(idUserType : string, userTypeDescription:string):Promise<UserType>{
        const createdUser = new this.userTypesModel({idUserType, userTypeDescription});
        return await createdUser.save();
    }

    async findAll():Promise<UserType[]>{
        return await this.userTypesModel.find().exec();
    }
}
