import { useNavigate } from "react-router-dom";
import { IApiService } from "../interfaces/IApiService";
import { fromUserFormToData } from "../utils/mappers/user.mapper";
import { useState } from "react";
import { Notification } from "../types/notification.type";

export interface FormValues {
  name: string;
  email: string;
  password: string;
  ["confirm-password"]: string;
}

export const useSignUp = () => {
	const navigate = useNavigate();
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    ["confirm-password"]: '',
  }

  const [ loading, setLoading ] = useState<boolean>(false); 

  const handleSubmit = async (
    values: FormValues, 
    apiService: IApiService, 
    getNotification: (type: Notification, msg: string) => void) => {
    setLoading(true);
    const mappedValues = fromUserFormToData(values);
    try {
      await apiService.post('auth/register', mappedValues);
      setLoading(false);
      getNotification('success', 'Signed up successfully. Please sign in.');
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