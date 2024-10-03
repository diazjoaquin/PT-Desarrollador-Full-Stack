import React from 'react';
import { AuthContext } from '../context/auth.context';

export const useAuth = () => {
	const context = React.useContext(AuthContext);

	if (!context) throw new Error('There is no auth context');

	return context;
};