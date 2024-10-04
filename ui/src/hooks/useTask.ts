import { useState } from "react"
import apiService from "../services/api.service";
import { ITask } from "../interfaces/ITask";
import { IProject } from "../interfaces/IProject";

export const useTask = () => {
  const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [ currentProject, setCurrentProject ] = useState< IProject | null>(null);

    const fetchTasks = async (projectId: number) => {
      setLoading(true);
      try {
        const response: ITask[] = await apiService.get(`task?project_id=${projectId}`);
        if (response) {
          const currentProject: IProject = await apiService.get(`project/${projectId}`);
          setTasks(response);
          setCurrentProject(currentProject);
          setLoading(false);
          console.log(response);
          
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

  return {
    fetchTasks,
    tasks,
    currentProject,
    loading,
    error
  }
}