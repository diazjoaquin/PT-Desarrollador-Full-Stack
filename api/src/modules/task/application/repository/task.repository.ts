import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../../domain/task.domain";
import { CreateTaskDto } from "../dto/create-task.dto";

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
  create(task: CreateTaskDto): Promise<Task>;
  update(id: number, task: UpdateTaskDto): Promise<UpdateTaskDto>;
  getByProjectId(id: number): Promise<Task[]>;
}