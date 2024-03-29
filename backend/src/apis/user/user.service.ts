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

  async fetchTattooist({ tattooistId }) {
    return await this.userRepository.findOne({
      where: { id: tattooistId },
    });
  }

  async fetchUser({ userId }) {
    return await this.userRepository.findOne({
      id: userId,
    });
  }

  async update({ userId, updateUserInput }) {
    const user = await this.userRepository.findOne({
      id: userId,
    });

    const updatedUser = {
      ...user,
      ...updateUserInput,
    };

    await this.userRepository.save(updatedUser);
    return 'Successfully Updated';
  }

  async likeTattooist({ tattooistId }) {
    const tattooist = await this.userRepository.findOne({
      where: { id: tattooistId },
    });

    await this.userRepository.update(
      { id: tattooistId },
      { likes: tattooist.likes + 1 },
    );

    return 'Liked Tattooist';
  }

  async cancelLike({ tattooistId }) {
    const tattooist = await this.userRepository.findOne({
      where: { id: tattooistId },
    });

    await this.userRepository.update(
      { id: tattooistId },
      { likes: tattooist.likes - 1 },
    );

    return 'Canceled like';
  }

  async fetchHot() {
    return await this.userRepository
      .createQueryBuilder('tattooist')
      .orderBy('tattooist.likes', 'DESC')
      .getMany();
  }
}
