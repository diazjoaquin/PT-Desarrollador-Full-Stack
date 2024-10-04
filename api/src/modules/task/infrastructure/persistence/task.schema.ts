import { EntitySchema } from "typeorm";
import { Task } from "../../domain/task.domain";
import { State } from "../../domain/state.enum";

export const TaskSchema = new EntitySchema<Task>({
  name: 'Task',
  target: Task,
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
    state: {
      name: 'state',
      type: 'enum',
      enum: State
    }
  },
  relations: {
    projectId: {
      type: 'many-to-one',
      target: 'Project',
      cascade: true,
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'project_id',
      }
    },
    assignedTo: {
      type: 'many-to-one',
      target: 'User',
      cascade: true,
      onDelete: 'CASCADE',
      joinColumn: {
        name: 'assigned_to',
      }
    }
  }
})