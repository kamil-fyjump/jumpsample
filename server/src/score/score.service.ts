import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScoreServiceBase } from "./base/score.service.base";

@Injectable()
export class ScoreService extends ScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
