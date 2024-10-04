export interface ITask {
  projectId: number,
  assignedTo: number,
  ['task-name']: string,
  ['task-description']: string,
  state: string,
}