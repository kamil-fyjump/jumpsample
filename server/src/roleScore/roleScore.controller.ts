import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoleScoreService } from "./roleScore.service";
import { RoleScoreControllerBase } from "./base/roleScore.controller.base";

@swagger.ApiTags("roleScores")
@common.Controller("roleScores")
export class RoleScoreController extends RoleScoreControllerBase {
  constructor(
    protected readonly service: RoleScoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
