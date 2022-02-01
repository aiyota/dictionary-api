import { IsNotEmpty } from "class-validator";

export class CreatePartOfSpeechDto {
  @IsNotEmpty()
  partOfSpeech: string;
}
