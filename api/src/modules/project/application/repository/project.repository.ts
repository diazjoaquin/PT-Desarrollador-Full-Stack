import { Project } from "../../domain/project.domain"
import { CreateProjectDto } from "../dto/create-project.dto"
import { UpdateProjectDto } from "../dto/update-project.dto"

export const PROJECT_REPOSITORY = 'PROJECT_REPOSITORY'

export interface IProjectRepository {
  findAll(): Promise<Project[]>
  findById(id: number): Promise<Project>
  create(project: CreateProjectDto): Promise<CreateProjectDto>
  update(id: number, project: UpdateProjectDto): Promise<UpdateProjectDto>
  delete(id: number): Promise<true>
}