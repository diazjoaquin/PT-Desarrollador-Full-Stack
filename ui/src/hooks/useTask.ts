import { useState } from "react"
import apiService from "../services/api.service";

export const useTask = () => {
  const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);

    const fetchTasks = async (projectId: number) => {
      setLoading(true);
      try {
        const response: any[] = await apiService.get(`task?project_id=${projectId}`);
        if (response) {
          setTasks(response);
          setLoading(false);
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
    loading,
    error
  }
}