import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }


  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    try {
      return await this.userModel.findById(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.userModel.updateOne({ _id: id }, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.deleteOne({ _id: id });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
