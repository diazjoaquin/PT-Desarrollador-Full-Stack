import { Role } from '../../common/enum/role.enum';
import { AuthUser } from './auth.user.interface';

export interface AuthTokenPayload {
	sub: number;
	exp: number;
	iat: number;
	role: Role;
	email: string;
}

export interface UserAccessToken {
	access_token: string;
	user: AuthUser;
}