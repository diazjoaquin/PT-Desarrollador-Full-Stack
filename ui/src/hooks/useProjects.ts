import { useEffect, useState } from "react"
import { IProject } from "../interfaces/IProject";
import apiService from "../services/api.service";
import { IProjectFormData } from "../interfaces/IProjectFormData";
import { fromProjectFormToData } from "../utils/mappers/project.mapper";
import { Notification } from "../types/notification.type";

export const useProjects = (onSuccess: () => void, userId: number) => {
  const [ projects, setProjects ] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

  const initialValues: IProjectFormData = {
    userId: userId,
    name: '',
    description: '',
    ['starting-date']: '',
    ['ending-date']: '',
  }


  const handleSubmit = async (
    values: IProjectFormData,
    getNotification: (type: Notification, msg: string) => void) => {
    setLoading(true);
    try {
      const project = fromProjectFormToData(values, userId);
      await apiService.post('project', project);
      getNotification('success', 'Project created successfully');
      setLoading(false);
      onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      getNotification('error', 'Error creating project');
    }
    setLoading(false);
  }

  useEffect(() => {
    const fetchProjects = async () => {  
      setLoading(true);
      try {
        const response: IProject[] = await apiService.get('project');
        if (response) {
          setProjects(response);
          setLoading(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      };
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id: number) => {
    console.log("Deleting project with ID:", id);
    try {
      const reponse = await apiService.delete(`project/${id}`);
      if (reponse) {
        setProjects((prevProjects) => {
					const updatedProjects = prevProjects.filter((project) => project.id !== id);
					return updatedProjects;
				})
      }
    } catch (error) {
			console.log(error);
    }
  }

  return {
    handleSubmit,
    initialValues,
    projects,
    loading,
    error,
    handleDelete
  }
}