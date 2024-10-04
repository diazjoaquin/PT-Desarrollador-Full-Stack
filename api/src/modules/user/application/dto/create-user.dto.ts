import { IsEnum, IsNumber, IsString } from "class-validator";
import { Role } from "../../domain/role.enum";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}