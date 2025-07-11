import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor( @InjectModel(User.name) private userModel : Model<User>){}

    createUser(createUserDto :CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getAllUsers(){
        return this.userModel.find();
    }

    getUserById(id: string) {
        return this.userModel.findById(id);
    }
}
