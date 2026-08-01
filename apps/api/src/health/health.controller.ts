import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("health")
@Controller("health")
export class HealthController {
  @Get()
  @ApiOkResponse({
    description: "Service health check",
    schema: {
      example: { status: "ok", service: "communityhub-api" },
    },
  })
  getHealth() {
    return {
      status: "ok" as const,
      service: "communityhub-api",
    };
  }
}
