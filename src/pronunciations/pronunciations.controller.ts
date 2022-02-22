import { Controller, Get } from "@nestjs/common";

@Controller("pronunciations")
export class PronunciationsController {
  @Get()
  Test(): string {
    return "Pronunciations";
  }
}
