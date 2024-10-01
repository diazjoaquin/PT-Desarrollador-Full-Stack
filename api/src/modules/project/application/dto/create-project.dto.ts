import { IsDate, IsNumber, IsString } from "class-validator"

export class CreateProjectDto {
  @IsNumber()
  id: number

  @IsNumber()
  userId: number  

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDate()
  startingDate: Date

  @IsDate()
  endingDate: Date
}