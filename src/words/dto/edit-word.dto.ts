import { IsOptional } from "class-validator";
import { PartOfSpeech } from "../../part-of-speech/part-of-speech.entity";

export default class EditWordDto {
  @IsOptional()
  word: string;

  @IsOptional()
  partOfSpeech: PartOfSpeech;

  @IsOptional()
  etymology: string;
}
