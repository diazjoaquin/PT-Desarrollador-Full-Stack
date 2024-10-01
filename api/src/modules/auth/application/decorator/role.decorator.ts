import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/modules/user/domain/role.enum';

export const ROLES_KEY = 'Role';
export const Roles = (role: Role) => SetMetadata(ROLES_KEY, role);