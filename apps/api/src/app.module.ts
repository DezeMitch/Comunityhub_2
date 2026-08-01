import { Module } from "@nestjs/common";
import { HealthController } from "./health/health.controller";
import { MembersController } from "./members/members.controller";
import { MembersService } from "./members/members.service";

@Module({
  controllers: [HealthController, MembersController],
  providers: [MembersService],
})
export class AppModule {}
