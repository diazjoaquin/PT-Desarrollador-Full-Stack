import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IProjectRepository } from "../../application/repository/project.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { ProjectSchema } from "./project.schema";
import { Repository } from "typeorm";
import { Project } from "../../domain/project.domain";
import { CreateProjectDto } from "../../application/dto/create-project.dto";
import { UserSchema } from "src/modules/user/infrastructure/persistence/user.schema";
import { User } from "src/modules/user/domain/user.domain";

@Injectable()
export class ProjectPostgresRepository implements IProjectRepository {
  constructor(
    @InjectRepository(ProjectSchema)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(UserSchema)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Project[]> {
    try {
      return await this.projectRepository.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);      
    }
  }

  async findById(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { id }
    });

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  async create(project: CreateProjectDto): Promise<Project> {
    const foundedProject = await this.projectRepository.findOne({ 
      where: {
        id: project.userId
      }
     });

     const foundedUser = await this.usersRepository.findOne({
      where: {
        id: project.userId
      }
     });

     if (!foundedUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
     }

    if (foundedProject) {
      throw new HttpException('Project already exists', HttpStatus.CONFLICT);
    }
    return await this.projectRepository.save(project);
  }

  async update(id: number, project: Project): Promise<Project> {
    const foundedProject = await this.projectRepository.findOne({ 
      where: {
        id: project.id
      }
     });

     if (!foundedProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
     }

     return this.projectRepository.save({
      ...project,
      id
     });
  }

  async delete(id: number): Promise<true> {
    const foundedProject = await this.projectRepository.findOne({
      where: { id }
    });

    if (!foundedProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    await this.projectRepository.delete(id);
    return true;
  }
}