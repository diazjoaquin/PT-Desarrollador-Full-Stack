import { State } from "./state.enum";

export class Task {
  id: number;
  projectId: number;
  asignedTo: number;
  name: string;
  description: string;
  state: State;
}