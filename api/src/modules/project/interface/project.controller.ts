import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProjectService } from "../application/service/project.service";
import { CreateProjectDto } from "../application/dto/create-project.dto";

@Controller("project")
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService
  ) {}

  
  @Get()
  async findAll() {
    return await this.projectService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.projectService.findById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() project: CreateProjectDto) {
    return await this.projectService.create(project);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() project: CreateProjectDto) {
    return await this.projectService.update(id, project);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.projectService.delete(id);
  }
}