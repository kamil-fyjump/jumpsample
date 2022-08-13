import { Module } from "@nestjs/common";
import { RoleScoreModuleBase } from "./base/roleScore.module.base";
import { RoleScoreService } from "./roleScore.service";
import { RoleScoreController } from "./roleScore.controller";
import { RoleScoreResolver } from "./roleScore.resolver";

@Module({
  imports: [RoleScoreModuleBase],
  controllers: [RoleScoreController],
  providers: [RoleScoreService, RoleScoreResolver],
  exports: [RoleScoreService],
})
export class RoleScoreModule {}
