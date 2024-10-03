import { jwtDecode } from 'jwt-decode';
import { AuthTokenPayload } from '../../interfaces/auth/access.token.interface';


export const decodeToken = <T>(token: string): T => {
	return jwtDecode(token);
};

export const verifyTokenExpiration = (token: string) => {
	const decodedToken = decodeToken<AuthTokenPayload>(token);
	const currentTime = Math.floor(Date.now() / 1000);

	return currentTime >= decodedToken.exp;
};