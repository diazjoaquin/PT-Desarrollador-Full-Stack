import { Role } from "src/modules/user/domain/role.enum";

export class SignUpDto {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}