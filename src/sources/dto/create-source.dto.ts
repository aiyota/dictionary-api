import { IsNotEmpty } from "class-validator";

export default class CreateSourceDto {
  @IsNotEmpty()
  source: string;
}
