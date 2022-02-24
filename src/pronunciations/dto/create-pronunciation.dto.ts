import { IsNotEmpty } from "class-validator";
import { Region } from "../../regions/regions.entity";
import { Source } from "../../sources/source.entity";
import { Word } from "../../words/word.entity";

export class CreatePronunciationDto {
  @IsNotEmpty()
  word: Word;

  @IsNotEmpty()
  ipa: string;

  audioUrl?: string;

  @IsNotEmpty()
  region: Region;

  @IsNotEmpty()
  source: Source;
}
