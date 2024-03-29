/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Score, RoleScore, Customer } from "@prisma/client";

export class ScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreFindManyArgs>
  ): Promise<number> {
    return this.prisma.score.count(args);
  }

  async findMany<T extends Prisma.ScoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreFindManyArgs>
  ): Promise<Score[]> {
    return this.prisma.score.findMany(args);
  }
  async findOne<T extends Prisma.ScoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreFindUniqueArgs>
  ): Promise<Score | null> {
    return this.prisma.score.findUnique(args);
  }
  async create<T extends Prisma.ScoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreCreateArgs>
  ): Promise<Score> {
    return this.prisma.score.create<T>(args);
  }
  async update<T extends Prisma.ScoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreUpdateArgs>
  ): Promise<Score> {
    return this.prisma.score.update<T>(args);
  }
  async delete<T extends Prisma.ScoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScoreDeleteArgs>
  ): Promise<Score> {
    return this.prisma.score.delete(args);
  }

  async findRoleScore(
    parentId: string,
    args: Prisma.RoleScoreFindManyArgs
  ): Promise<RoleScore[]> {
    return this.prisma.score
      .findUnique({
        where: { id: parentId },
      })
      .roleScore(args);
  }

  async getUserId(parentId: string): Promise<Customer | null> {
    return this.prisma.score
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}
