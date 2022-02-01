import { IsNotEmpty } from "class-validator";

export class EditPartOfSpeechDto {
  @IsNotEmpty()
  partOfSpeech: string;
}
