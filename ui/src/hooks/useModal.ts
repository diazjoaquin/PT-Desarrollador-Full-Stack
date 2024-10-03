import { useState } from "react";

export const useModal = () => {
  const [isOpenCreateProject, setIsOpenCreateProject] = useState(false);
  const [ isOpenDeleteProject, setIsOpenDeleteProject ] = useState(false);

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
    isOpenDeleteProject,
    openDeleteProject,
    closeDeleteProject,
    isOpenCreateProject,
    openCreateProject,
    closeCreateProject,
  }
}