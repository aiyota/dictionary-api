import { IsNotEmpty } from "class-validator";

export class CreateRegionDto {
  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  abbreviation: string;
}
