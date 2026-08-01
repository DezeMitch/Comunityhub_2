import { Controller, Get, Query } from "@nestjs/common";
import { ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { MembersService } from "./members.service";

@ApiTags("members")
@Controller("members")
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "pageSize", required: false, type: Number })
  @ApiOkResponse({ description: "Paginated public member profiles" })
  listMembers(
    @Query("page") page = "1",
    @Query("pageSize") pageSize = "20",
  ) {
    return this.membersService.listPublicMembers(
      Number(page) || 1,
      Number(pageSize) || 20,
    );
  }
}
