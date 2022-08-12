/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateRoleScoreArgs } from "./CreateRoleScoreArgs";
import { UpdateRoleScoreArgs } from "./UpdateRoleScoreArgs";
import { DeleteRoleScoreArgs } from "./DeleteRoleScoreArgs";
import { RoleScoreFindManyArgs } from "./RoleScoreFindManyArgs";
import { RoleScoreFindUniqueArgs } from "./RoleScoreFindUniqueArgs";
import { RoleScore } from "./RoleScore";
import { ScoreFindManyArgs } from "../../score/base/ScoreFindManyArgs";
import { Score } from "../../score/base/Score";
import { RoleScoreService } from "../roleScore.service";

@graphql.Resolver(() => RoleScore)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RoleScoreResolverBase {
  constructor(
    protected readonly service: RoleScoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "read",
    possession: "any",
  })
  async _roleScoresMeta(
    @graphql.Args() args: RoleScoreFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RoleScore])
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "read",
    possession: "any",
  })
  async roleScores(
    @graphql.Args() args: RoleScoreFindManyArgs
  ): Promise<RoleScore[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RoleScore, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "read",
    possession: "own",
  })
  async roleScore(
    @graphql.Args() args: RoleScoreFindUniqueArgs
  ): Promise<RoleScore | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RoleScore)
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "create",
    possession: "any",
  })
  async createRoleScore(
    @graphql.Args() args: CreateRoleScoreArgs
  ): Promise<RoleScore> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RoleScore)
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "update",
    possession: "any",
  })
  async updateRoleScore(
    @graphql.Args() args: UpdateRoleScoreArgs
  ): Promise<RoleScore | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RoleScore)
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "delete",
    possession: "any",
  })
  async deleteRoleScore(
    @graphql.Args() args: DeleteRoleScoreArgs
  ): Promise<RoleScore | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Score])
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  async scores(
    @graphql.Parent() parent: RoleScore,
    @graphql.Args() args: ScoreFindManyArgs
  ): Promise<Score[]> {
    const results = await this.service.findScores(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}