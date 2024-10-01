import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
  create(task: CreateTaskDto): Promise<CreateTaskDto>;
  update(id: number, task: UpdateTaskDto): Promise<UpdateTaskDto>;
  getByProjectId(id: number): Promise<CreateTaskDto[]>;
}