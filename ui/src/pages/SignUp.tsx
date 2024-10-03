import { Navigate } from "react-router-dom";
import { SignUpForm } from "../components/sign-up/Form";
import { useAuth } from "../hooks/useAuth";
import apiService from "../services/api.service";
import { useSignUp } from "../hooks/useSignUp";
import { useNotification } from "../hooks/useNotification";

export const SignUp = () => {
  const { authState } = useAuth();
  const { handleSubmit, initialValues, loading } = useSignUp();
	const { getNotification } = useNotification();


	return authState.isAuth ? (
		<Navigate to="/" replace />
	) : (
		<>
			<SignUpForm
				apiService={apiService} 
				handleSubmit={handleSubmit} 
				initialValues={initialValues}
				loading={loading} 
				getNotification={getNotification}
			/>
		</>
	);
};