import { IsEnum, IsNumber, IsString } from "class-validator";
import { State } from "../../domain/state.enum";

export class CreateTaskDto {
  @IsNumber()
  projectId: number;

  @IsNumber()
  asignedTo: number;

  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(State)
  state: State;
}