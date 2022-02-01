import { IsNotEmpty, IsOptional } from "class-validator";
import { PartOfSpeech } from "../../part-of-speech/part-of-speech.entity";

export default class CreateWordDto {
  @IsNotEmpty()
  word: string;

  @IsNotEmpty()
  partOfSpeech: PartOfSpeech;

  @IsOptional()
  etymology: string;
}
