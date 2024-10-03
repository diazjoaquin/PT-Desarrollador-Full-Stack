import { AuthTokenPayload } from "../../interfaces/auth/access.token.interface";
import { decodeToken, verifyTokenExpiration } from "../token/decode.token";

export const getCookie = (name: string) => {
	const cookies = document.cookie;

	if (cookies) {
		const cookieParts = document.cookie.split(`${name}=`);
		const cookie = cookieParts[1].split(';');
		return cookie[0];
	}

	return null;
};

export const getUserDataByCookie = (name: string) => {
	const cookie = getCookie(name);

	if (cookie) {
		const authTokenPayload = decodeToken<AuthTokenPayload>(cookie);
		return {
			email: authTokenPayload.email,
			id: authTokenPayload.sub,
			role: authTokenPayload.role,
		};
	}

	return null;
};

export const getIsAuthByCookie = (name: string) => {
	const cookie = getCookie(name);

	if (cookie) {
		const cookieIsExpired = verifyTokenExpiration(cookie);
		return !cookieIsExpired;
	}

	return false;
};

export const getIsExpiredByCookie = (name: string) => {
	const cookie = getCookie(name);

	if (cookie) {
		return verifyTokenExpiration(cookie);
	}

	return false;
};


