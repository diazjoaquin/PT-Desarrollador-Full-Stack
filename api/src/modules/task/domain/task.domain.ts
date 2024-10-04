import { Base } from "src/common/domain/base.domain";
import { State } from "./state.enum";

export class Task extends Base {
  projectId: number;
  assignedTo: number;
  name: string;
  description: string;
  state: State;
}