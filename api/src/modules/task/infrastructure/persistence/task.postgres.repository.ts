import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../application/repository/task.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskSchema } from "./task.schema";
import { Repository } from "typeorm";
import { Task } from "../../domain/task.domain";
import { ProjectSchema } from "src/modules/project/infrastructure/persistence/project.schema";
import { Project } from "src/modules/project/domain/project.domain";
import { CreateTaskDto } from "../../application/dto/create-task.dto";
import { UpdateTaskDto } from "../../application/dto/update-task.dto";

@Injectable()
export class TaskPostgresRepository implements ITaskRepository {
  constructor(
    @InjectRepository(TaskSchema)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(ProjectSchema)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create (task: CreateTaskDto): Promise<Task> {
    const foundedProject = await this.projectRepository.findOne({
      where: { id: task.projectId }
    })

    if (!foundedProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    return this.taskRepository.save(task);
  }

  async update(id: number, task: UpdateTaskDto): Promise<UpdateTaskDto> {
    const foundedTask = await this.taskRepository.findOne({
      where: { id }
    });

    if (!foundedTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return this.taskRepository.save({
      ...task,
      id
    });
  }

  async getByProjectId(id: number): Promise<Task[]> {
    const project = await this.projectRepository.findOne({
      where: { id: id },
    });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    const tasks = await this.taskRepository.find({
      where: { projectId: id },
      relations: ['projectId', 'asignedTo']
    });
    return tasks;
  }
}