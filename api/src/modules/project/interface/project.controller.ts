import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProjectService } from "../application/service/project.service";
import { CreateProjectDto } from "../application/dto/create-project.dto";
import { Project } from "../domain/project.domain";
import { AuthGuard } from "src/modules/auth/application/guards/auth.guard";
import { RoleGuard } from "src/modules/auth/application/guards/role.guard";
import { Public } from "src/modules/auth/application/decorator/public.decorator";

@UseGuards(AuthGuard, RoleGuard)
@Controller("project")
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService
  ) {}

  
  @Get()
  async findAll() {
    return await this.projectService.findAll();
  }

  @Public()
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.projectService.findById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() project: CreateProjectDto) {
    return await this.projectService.create(project);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Put(':id')
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