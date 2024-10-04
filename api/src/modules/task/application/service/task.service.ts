import { Inject, Injectable } from "@nestjs/common";
import { ITaskRepository, TASK_REPOSITORY } from "../repository/task.repository";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../../domain/task.domain";

@Injectable()
export class TaskService implements ITaskRepository {
  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: ITaskRepository,
  ) {}

  async create(task: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.create(task);
  }

  async update(id: number, task: UpdateTaskDto): Promise<UpdateTaskDto> {
    return await this.taskRepository.update(id, task);
  }

  async getByProjectId(id: number): Promise<Task[]> {
    return await this.taskRepository.getByProjectId(id);
  }
}