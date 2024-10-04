import { useState } from "react"
import apiService from "../services/api.service";
import { ITask } from "../interfaces/ITask";
import { IProject } from "../interfaces/IProject";
import { fromTaskFormToData } from "../utils/mappers/task.mapper";

export const useTask = (userId: number) => {
  const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [ currentProject, setCurrentProject ] = useState< IProject | null>(null);

  const taskInitialValues: ITask = {
    projectId: currentProject?.id!,
    assignedTo: userId,
    ['task-name']: "",
    ['task-description']: "",
    state: "to do",
  }

  const handleSubmitTask = async (values: ITask, onSuccess: () => void) => {
    console.log('values', values);
    setLoading(true);
    try {
      const task = fromTaskFormToData(values);
      console.log('task', task);
      const reponse: ITask = await apiService.post('task', task);
      if (reponse) {
        setTasks([...tasks, reponse]);
        onSuccess();
        setLoading(false);
        console.log(reponse);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

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
    taskInitialValues,
    handleSubmitTask,
    fetchTasks,
    tasks,
    currentProject,
    loading,
    error
  }
}