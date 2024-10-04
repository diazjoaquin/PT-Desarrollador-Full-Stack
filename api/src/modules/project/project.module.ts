import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectSchema } from "./infrastructure/persistence/project.schema";
import { ProjectController } from "./interface/project.controller";
import { ProjectService } from "./application/service/project.service";
import { ProjectMapper } from "./application/mapper/project.mapper";
import { PROJECT_REPOSITORY } from "./application/repository/project.repository";
import { ProjectPostgresRepository } from "./infrastructure/persistence/project.postgres.repository";
import { UserSchema } from "../user/infrastructure/persistence/user.schema";
import { UserModule } from "../user/user.module";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "../auth/application/guards/auth.guard";
import { TaskModule } from "../task/task.module";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectSchema, UserSchema]),
  UserModule,
  forwardRef(() => TaskModule)
  ],
  controllers: [ProjectController],
  providers: [
    AuthGuard,
    JwtService,
    ProjectService,
    ProjectMapper,
    {
      provide: PROJECT_REPOSITORY,
      useClass: ProjectPostgresRepository,
    },
  ],
  exports: [
    ProjectService,
    ProjectMapper,
    {
      provide: PROJECT_REPOSITORY,
      useClass: ProjectPostgresRepository,
    },
  ],
})

export class ProjectModule {}