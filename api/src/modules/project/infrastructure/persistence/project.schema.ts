import { EntitySchema } from "typeorm";
import { Project } from "../../domain/project.domain";

export const ProjectSchema = new EntitySchema<Project>({
  name: 'Project',
  target: Project,
  columns: {
    id: {
      type: 'integer',
      primary: true,
      generated: true
    },
    name: {
      name: 'name',
      type: 'varchar'
    },
    description: {
      name: 'description',
      type: 'varchar'
    },
    startingDate: {
      name: 'starting_date',
      type: 'date'
    },
    endingDate: {
      name: 'ending_date',
      type: 'date'
    }
  },
  relations: {
    userId: {
      type: 'many-to-one',
      target: 'User',
      cascade: true,
      onDelete: 'CASCADE',
      eager: true,
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'id'
      }
    }
  }
})