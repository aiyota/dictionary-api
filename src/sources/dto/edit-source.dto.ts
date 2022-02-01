import { IsNotEmpty } from "class-validator";

export default class EditSourceDto {
  @IsNotEmpty()
  source: string;
}
