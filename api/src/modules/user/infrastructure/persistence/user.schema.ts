import { EntitySchema } from "typeorm";
import { Role } from "../../domain/role.enum";
import { User } from "../../domain/user.domain";

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  columns: {
    id: {
      name: 'id',
      type: 'integer',
      primary: true,
      generated: true
    },
    name: {
      name: 'name',
      type: 'varchar'
    },
    email: {
      name: 'email',
      type: 'varchar',
      unique: true
    },
    password: {
      name: 'password',
      type: 'varchar'
    },
    role: {
      name: 'role',
      type: 'enum',
      enum: Role
    }
  }
});