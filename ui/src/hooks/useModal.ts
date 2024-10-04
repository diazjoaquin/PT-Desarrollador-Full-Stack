import { useState } from "react";

export const useModal = () => {
  const [isOpenCreateProject, setIsOpenCreateProject] = useState(false);
  const [ isOpenDeleteProject, setIsOpenDeleteProject ] = useState(false);
  const [ isOpenAddTask, setIsOpenAddTask ] = useState(false);

  const openAddTask = () => {
    setIsOpenAddTask(true);
  };

  const closeAddTask = () => {
    setIsOpenAddTask(false);
  };

  const openDeleteProject = () => {
    setIsOpenDeleteProject(true);
  };

  const closeDeleteProject = () => {
    setIsOpenDeleteProject(false);
  };

  const openCreateProject = () => {
    setIsOpenCreateProject(true);
  };


  const closeCreateProject = () => {
    setIsOpenCreateProject(false);
  };

  return {
    isOpenAddTask,
    openAddTask,
    closeAddTask,
    isOpenDeleteProject,
    openDeleteProject,
    closeDeleteProject,
    isOpenCreateProject,
    openCreateProject,
    closeCreateProject,
  }
}