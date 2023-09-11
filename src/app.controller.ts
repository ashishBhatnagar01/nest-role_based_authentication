import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Roles } from "../utils/decorators/custom.decorators";
import { RolesEnums } from "../utils/enums/roles.enums";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(RolesEnums.USER)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  @Roles(RolesEnums.ADMIN)
  getUsers(): string {
    return this.appService.getUsers();
  }
}
