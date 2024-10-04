import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import TaskList from "../components/task/TaskList";
import { useProjects } from "../hooks/useProjects";
import Drawer from "../components/drawer/Drawer";
import { useModal } from "../hooks/useModal";
import { CreateProjectForm } from "../components/project/CreateProjectForm";
import { useNotification } from "../hooks/useNotification";
import { ConfirmDeleteProject } from "../components/project/ConfirmDeleteProject";
import { useState } from "react";
import { useTask } from "../hooks/useTask";
import { AddTaskForm } from "../components/task/AddTaskForm";

export const Home = () => {
	const { authState } = useAuth();
  const userId = authState?.user?.id;
  const [ projectId, setProjectId ] = useState<number | null>(null);

  const {
    isOpenAddTask,
    openAddTask,
    closeAddTask,
    isOpenDeleteProject,
    openDeleteProject,
    closeDeleteProject,
    openCreateProject, 
    closeCreateProject, 
    isOpenCreateProject } = useModal();
  const { 
    handleDelete, 
    projects, 
    handleSubmit, 
    initialValues } = useProjects(closeCreateProject, userId!);
  const { getNotification } = useNotification();
  const { tasks, fetchTasks, currentProject, taskInitialValues, handleSubmitTask } = useTask(userId!);

  return authState.isAuth ? (
    <div className="flex pt-12 px-4">
      <Drawer 
        projects={projects}
        openCreateProjectModal={openCreateProject}
        openDeleteProjectModal={openDeleteProject}
        setProjectId={setProjectId}
        fetchTasks={fetchTasks}
      />
      <TaskList tasks={tasks} currentProject={currentProject} openAddTask={openAddTask}/>
      <CreateProjectForm
        handleCloseModal={closeCreateProject} 
        isOpen={isOpenCreateProject}
        handleSubmit={(values) => handleSubmit(values, getNotification)}
        initialValues={initialValues}
        getNotification={getNotification}
      />
      <ConfirmDeleteProject
        handleDelete={handleDelete} 
        handleCloseModal={closeDeleteProject}
        isOpen={isOpenDeleteProject}
        projectId={projectId!}
      />
      <AddTaskForm
        handleSubmit={(values) => handleSubmitTask(values, closeAddTask)}
        initialValues={taskInitialValues}
        handleCloseModal={closeAddTask}
        isOpen={isOpenAddTask}
      />
    </div>
  ) : (
    <Navigate to="/sign-in" replace />
  )
};