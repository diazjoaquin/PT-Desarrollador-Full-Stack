import { useNavigate } from "react-router-dom";
import { IApiService } from "../interfaces/IApiService";
import { useAuth } from "./useAuth";
import { UserAccessToken } from "../interfaces/auth/access.token.interface";
import { useState } from "react";
import { Notification } from "../types/notification.type";

export interface FormValues {
  email: string;
  password: string;
}

export const useSignIn = () => {
	const navigate = useNavigate();
	const { handleLogIn } = useAuth();
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const [ loading, setLoading ] = useState<boolean>(false); 


  const handleSubmit = async (
    values: FormValues, 
    apiService: IApiService, 
    getNotification: (type: Notification, msg: string) => void) => {
    setLoading(true);
    try {
      const signInResponse = await apiService.post<UserAccessToken, FormValues>('auth/login', values);
			handleLogIn(signInResponse);
      setLoading(false);
      getNotification('success', 'Signed in successfully');
      navigate('/');
    } catch (error) {
      console.log(error);      
    }
    setLoading(false);
  }

  return {
    initialValues,
    handleSubmit,
    loading
  }
}