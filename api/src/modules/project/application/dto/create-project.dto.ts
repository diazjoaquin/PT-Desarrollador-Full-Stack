import { Type } from "class-transformer"
import { IsDate, IsNumber, IsString } from "class-validator"

export class CreateProjectDto {
  @IsNumber()
  userId: number 

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDate()
  @Type(() => Date)
  startingDate: Date

  @IsDate()
  @Type(() => Date)
  endingDate: Date
}