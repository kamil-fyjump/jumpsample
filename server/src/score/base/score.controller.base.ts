/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ScoreService } from "../score.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScoreCreateInput } from "./ScoreCreateInput";
import { ScoreWhereInput } from "./ScoreWhereInput";
import { ScoreWhereUniqueInput } from "./ScoreWhereUniqueInput";
import { ScoreFindManyArgs } from "./ScoreFindManyArgs";
import { ScoreUpdateInput } from "./ScoreUpdateInput";
import { Score } from "./Score";
import { RoleScoreFindManyArgs } from "../../roleScore/base/RoleScoreFindManyArgs";
import { RoleScore } from "../../roleScore/base/RoleScore";
import { RoleScoreWhereUniqueInput } from "../../roleScore/base/RoleScoreWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScoreControllerBase {
  constructor(
    protected readonly service: ScoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Score })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ScoreCreateInput): Promise<Score> {
    return await this.service.create({
      data: {
        ...data,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Score] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ScoreFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Score[]> {
    const args = plainToClass(ScoreFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ScoreWhereUniqueInput
  ): Promise<Score | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ScoreWhereUniqueInput,
    @common.Body() data: ScoreUpdateInput
  ): Promise<Score | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ScoreWhereUniqueInput
  ): Promise<Score | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "RoleScore",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/roleScore")
  @ApiNestedQuery(RoleScoreFindManyArgs)
  async findManyRoleScore(
    @common.Req() request: Request,
    @common.Param() params: ScoreWhereUniqueInput
  ): Promise<RoleScore[]> {
    const query = plainToClass(RoleScoreFindManyArgs, request.query);
    const results = await this.service.findRoleScore(params.id, {
      ...query,
      select: {
        backend: true,
        businessAnalyst: true,
        createdAt: true,
        dataScience: true,
        frontend: true,
        id: true,
        qa: true,
        saleEngineer: true,
        uiUx: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/roleScore")
  async connectRoleScore(
    @common.Param() params: ScoreWhereUniqueInput,
    @common.Body() body: RoleScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleScore: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/roleScore")
  async updateRoleScore(
    @common.Param() params: ScoreWhereUniqueInput,
    @common.Body() body: RoleScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleScore: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/roleScore")
  async disconnectRoleScore(
    @common.Param() params: ScoreWhereUniqueInput,
    @common.Body() body: RoleScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleScore: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
