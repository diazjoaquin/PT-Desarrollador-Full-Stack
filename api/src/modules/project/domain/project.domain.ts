import { Base } from "src/common/domain/base.domain";
import { Task } from "src/modules/task/domain/task.domain";

export class Project extends Base {
  userId: number;
  name: string;
  description: string;
  startingDate: Date;
  endingDate: Date;
  tasks: Task[]
}