import { IsNotEmpty } from "class-validator";
import { Source } from "src/sources/source.entity";
import { Word } from "src/words/word.entity";

export class CreatePronunciationDto {
  @IsNotEmpty()
  word: Word;

  @IsNotEmpty()
  ipa: string;

  audioUrl?: string;
  // todo make regions entity

  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  source: Source;
}
