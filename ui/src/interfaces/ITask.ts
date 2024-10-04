export interface ITask {
  id: number,
  projectId: number,
  assignedTo: number,
  name: string,
  description: string,
  state: string,
}