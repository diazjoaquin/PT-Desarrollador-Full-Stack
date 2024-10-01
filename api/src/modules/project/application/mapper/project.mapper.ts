import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Project } from '../../domain/project.domain';

@Injectable()
export class ProjectMapper {
  public fromDtoToEntity(projectDto: CreateProjectDto | UpdateProjectDto): Project {
    const newProject = new Project();
    newProject.userId = projectDto.userId;
    newProject.name = projectDto.name;
    newProject.description = projectDto.description;
    newProject.startingDate = projectDto.startingDate;
    newProject.endingDate = projectDto.endingDate;
    return newProject;
  }
}