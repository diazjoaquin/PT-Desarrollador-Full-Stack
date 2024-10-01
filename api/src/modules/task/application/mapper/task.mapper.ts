import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../../domain/task.domain";

@Injectable()
export class TaskMapper {
  public fromDtoToEntity(taskDto: CreateTaskDto): Task {
    const newTask = new Task();
    newTask.asignedTo = taskDto.asignedTo;
    newTask.projectId = taskDto.projectId;
    newTask.id = taskDto.id;
    newTask.name = taskDto.name;
    newTask.description = taskDto.description;
    newTask.state = taskDto.state;
    return newTask;
  }
}