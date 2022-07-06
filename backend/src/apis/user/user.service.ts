import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ createUserInput }) {
    const overlapEmailCheck = await this.userRepository.findOne({
      email: createUserInput.email,
    });

    const overlapPhoneNumCheck = await this.userRepository.findOne({
      phoneNumber: createUserInput.phoneNumber,
    });

    if (overlapEmailCheck || overlapPhoneNumCheck) {
      throw new ConflictException('This email has been already used');
    }

    const result = await this.userRepository.save({ ...createUserInput });
    return result;
  }

  async fetchTattooists() {
    return await this.userRepository.find({
      isTattooist: true,
    });
  }

  async fetchUser({ userId }) {
    return await this.userRepository.findOne({
      id: userId,
    });
  }

  async update({ userId, updateUserInput }) {
    const user = this.userRepository.findOne({
      id: userId,
    });

    const updatedUser = {
      ...user,
      ...updateUserInput,
    };

    return await this.userRepository.save(updatedUser);
  }
}
