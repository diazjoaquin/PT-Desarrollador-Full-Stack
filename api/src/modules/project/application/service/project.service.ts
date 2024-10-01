import { Inject, Injectable } from "@nestjs/common";
import { IProjectRepository, PROJECT_REPOSITORY } from "../repository/project.repository";
import { Project } from "../../domain/project.domain";
import { UpdateProjectDto } from "../dto/update-project.dto";
import { CreateProjectDto } from "../dto/create-project.dto";

@Injectable()
export class ProjectService implements IProjectRepository {
  constructor(
    @Inject(PROJECT_REPOSITORY)
    private readonly projectRepository: IProjectRepository
  ) {}
  findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
  findById(id: number): Promise<Project> {
    return this.projectRepository.findById(id);
  }
  create(project: CreateProjectDto): Promise<CreateProjectDto> {
    return this.projectRepository.create(project);
  }
  update(id: number, project: UpdateProjectDto): Promise<UpdateProjectDto> {
    return this.projectRepository.update(id, project);
  }
  delete(id: number): Promise<true> {
    return this.projectRepository.delete(id);
  }
}