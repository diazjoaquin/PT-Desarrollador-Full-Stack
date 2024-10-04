import { IFetchConfig } from "../../interfaces/IFetchConfig";
import { getCookie } from "../../utils/cookies/cookies.utils";

export const FetchConfig: IFetchConfig = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'access_token': getCookie('access_token')?.toString() || '',
	},
	baseUrl: 'http://localhost:5000',
};