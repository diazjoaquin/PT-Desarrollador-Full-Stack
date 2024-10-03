import { IFetchConfig } from "../../interfaces/IFetchConfig";

export const FetchConfig: IFetchConfig = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	baseUrl: 'http://localhost:5000',
};