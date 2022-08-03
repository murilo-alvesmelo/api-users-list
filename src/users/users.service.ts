import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { User } from './entity/users.entity';
import { UserInterface } from './entity/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    findAll(){
        return this.userRepository.find();
    }
    create(user: UserInterface): Promise<UserInterface>{
        return this.userRepository.save(user);
    }

    update(id: number, user: UserInterface): Promise<UpdateResult>{
        return this.userRepository.update(id, user);
    }

    delete(id: number): Promise<DeleteResult>{
        return this.userRepository.delete(id)
    }
}
