import { IsEnum, IsString } from "class-validator";
import { Role } from "src/modules/user/domain/role.enum";

export class SignUpDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}