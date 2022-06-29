import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ createUserInput }) {
    const user = await this.userRepository.findOne({
      email: createUserInput.email,
    });

    if (user) throw new ConflictException('This email has been already used');

    return await this.userRepository.save(createUserInput);
  }

  async findOne({ email }) {
    return await this.userRepository.findOne({
      where: { email: email },
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findTattooists() {
    return await this.userRepository.find({ isTattooist: true });
  }

  async update({ id, updateUserInput }) {
    const user = await this.userRepository.findOne({ id: id });

    const newUser = {
      ...user,
      password: updateUserInput.password,
    };
    return await this.userRepository.save(newUser);
  }

  async delete({ id }) {
    const result = await this.userRepository.softDelete({ id });
    return result.affected ? true : false;
  }
}
