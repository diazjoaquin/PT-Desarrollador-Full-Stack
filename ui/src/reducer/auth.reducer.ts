import { AuthReducerState, AuthUser } from "../interfaces/auth/auth.user.interface";


type AuthAction = { type: 'LOGOUT' } | { type: 'LOGIN'; payload: AuthUser };

export const authReducer = (
	state: AuthReducerState,
	action: AuthAction,
): AuthReducerState => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isAuth: true,
				isExpired: false,
				user: action.payload,
			};
		case 'LOGOUT':
			return {
				user: null,
				isAuth: false,
				isExpired: false,
			};
	}
};