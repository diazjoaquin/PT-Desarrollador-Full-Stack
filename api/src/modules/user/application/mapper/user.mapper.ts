import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/domain/user.domain';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserMapper {
  public fromDtoToEntity(userDto: CreateUserDto): User {
    const newUser = new User();
    newUser.id = userDto.id;
    newUser.name = userDto.name;
    newUser.email = userDto.email;
    newUser.password = userDto.password;
    newUser.role = userDto.role;
    return newUser;
  }
}