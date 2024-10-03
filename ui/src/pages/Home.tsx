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

export const Home = () => {
	const { authState } = useAuth();
  const userId = authState?.user?.id;
  const [ projectId, setProjectId ] = useState<number | null>(null);

  const {
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
  const { tasks, fetchTasks } = useTask();

  return authState.isAuth ? (
    <div className="flex pt-12 px-4">
      <Drawer 
        projects={projects}
        openCreateProjectModal={openCreateProject}
        openDeleteProjectModal={openDeleteProject}
        setProjectId={setProjectId}
        fetchTasks={fetchTasks}
      />
      <TaskList tasks={tasks} />
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
    </div>
  ) : (
    <Navigate to="/sign-in" replace />
  )
};