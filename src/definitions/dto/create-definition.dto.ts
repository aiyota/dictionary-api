import { IsNotEmpty } from "class-validator";
import { Source } from "../../sources/source.entity";
import { Word } from "../../words/word.entity";

export class CreateDefinitionDto {
  @IsNotEmpty()
  word: Word;

  @IsNotEmpty()
  definition: string;

  @IsNotEmpty()
  source: Source;
}
