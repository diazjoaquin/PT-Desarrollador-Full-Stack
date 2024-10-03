import { Navigate } from "react-router-dom";
import { SignInForm } from "../components/sign-in/Form";
import { useAuth } from "../hooks/useAuth";
import apiService from "../services/api.service";
import { useSignIn } from "../hooks/useSignIn";
import { useNotification } from "../hooks/useNotification";

export const SignIn = () => {
  const { authState } = useAuth();
	const { handleSubmit, initialValues, loading } = useSignIn();
	const { getNotification } = useNotification();

	return authState.isAuth ? (
		<Navigate to="/" replace />
	) : (
		<>
			<SignInForm 
				apiService={apiService} 
				handleSubmit={handleSubmit} 
				initialValues={initialValues} 
				loading={loading}
				getNotification={getNotification}
			/>
		</>
	);
};