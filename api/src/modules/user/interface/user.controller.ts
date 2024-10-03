import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "../application/service/user.service";
import { AuthGuard } from "src/modules/auth/application/guards/auth.guard";
import { RoleGuard } from "src/modules/auth/application/guards/role.guard";

@UseGuards(AuthGuard, RoleGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
};