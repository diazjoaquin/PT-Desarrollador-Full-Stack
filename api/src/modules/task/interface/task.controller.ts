import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { TaskService } from "../application/service/task.service";
import { CreateTaskDto } from "../application/dto/create-task.dto";
import { UpdateTaskDto } from "../application/dto/update-task.dto";
import { Task } from "../domain/task.domain";

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {}

  @Post()
  async create(@Body() task: CreateTaskDto) {
    return await this.taskService.create(task);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    task: UpdateTaskDto) {
    return await this.taskService.update(id, task);
  }

  @Get()
  async getByProjectId(@Query('project_id', ParseIntPipe) id: number) {
    return await this.taskService.getByProjectId(id);
  }
}