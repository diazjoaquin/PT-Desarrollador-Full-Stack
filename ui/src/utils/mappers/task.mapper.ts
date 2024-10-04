import { ITask } from "../../interfaces/ITask";

export function fromTaskFormToData (
  formValues: ITask,
) {
  return {
    projectId: formValues.projectId,
    assignedTo: formValues.assignedTo,
    name: formValues['task-name'],
    description: formValues['task-description'],
    state: formValues.state
  }
}