import * as Yup from 'yup';

export const createProjectSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Project name must be at least 3 characters long')
    .required('Project name is required'),
  description: Yup.string()
    .min(6, 'Project description must be at least 3 characters long')
    .required('Project description is required'),
  ["starting-date"]: Yup.string()
    .required('Starting date is required'),
  ["ending-date"]: Yup.string()
    .required('Ending date is required'),
})