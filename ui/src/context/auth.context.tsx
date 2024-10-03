import React from 'react';
import { useCookies } from 'react-cookie';
import { AuthReducerState } from '../interfaces/auth/auth.user.interface';
import { UserAccessToken } from '../interfaces/auth/access.token.interface';
import { authReducer } from '../reducer/auth.reducer';
import { getIsAuthByCookie, getIsExpiredByCookie, getUserDataByCookie } from '../utils/cookies/cookies.utils';
import { COOKIES } from '../constants/cookie.name';



interface AuthContextValues {
	authState: AuthReducerState;
	handleLogIn: (accessToken: UserAccessToken) => void;
	handleLogOut: () => void;
}

export const AuthContext = React.createContext<AuthContextValues | null>(null);

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const [, setCookie, removeCookie] = useCookies([COOKIES.ACCESS_TOKEN]);
	const [authState, dispatch] = React.useReducer(authReducer, {
		user: getUserDataByCookie(COOKIES.ACCESS_TOKEN),
		isAuth: getIsAuthByCookie(COOKIES.ACCESS_TOKEN),
		isExpired: getIsExpiredByCookie(COOKIES.ACCESS_TOKEN),
	});

	const handleLogIn = (accessToken: UserAccessToken) => {
		setCookie(COOKIES.ACCESS_TOKEN, accessToken['access_token'], {
			path: '/',
		});
		dispatch({
			type: 'LOGIN',
			payload: accessToken.user,
		});
	};
	const handleLogOut = () => {
		removeCookie(COOKIES.ACCESS_TOKEN);
		dispatch({
			type: 'LOGOUT',
		});
	};

	const values = { authState, handleLogIn, handleLogOut };

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};