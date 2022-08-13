import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RoleScoreServiceBase } from "./base/roleScore.service.base";

@Injectable()
export class RoleScoreService extends RoleScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
