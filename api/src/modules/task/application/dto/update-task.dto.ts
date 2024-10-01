import { IsEnum } from "class-validator";
import { State } from "../../domain/state.enum";

export class UpdateTaskDto {
  @IsEnum(State)
  state: State
}