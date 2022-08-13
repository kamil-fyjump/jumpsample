import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RoleScoreResolverBase } from "./base/roleScore.resolver.base";
import { RoleScore } from "./base/RoleScore";
import { RoleScoreService } from "./roleScore.service";

@graphql.Resolver(() => RoleScore)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RoleScoreResolver extends RoleScoreResolverBase {
  constructor(
    protected readonly service: RoleScoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
