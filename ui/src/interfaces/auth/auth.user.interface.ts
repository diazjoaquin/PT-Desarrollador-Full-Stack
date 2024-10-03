import { Role } from "../../common/enum/role.enum";

export interface AuthReducerState {
	user: AuthUser | null;
	isAuth: boolean;
	isExpired: boolean;
}

export interface AuthUser {
	id: number;
	role: Role;
	email: string;
}