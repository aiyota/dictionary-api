import { EntityRepository, Repository } from "typeorm";
import { CreatePronunciationDto } from "./dto/create-pronunciation.dto";
import { Pronunciation } from "./pronunciation.entity";

@EntityRepository(Pronunciation)
export class PronunciationRepository extends Repository<Pronunciation> {
  async createPronunciation(createPronunciationDto: CreatePronunciationDto) {
    const { word, ipa, audioUrl, region, source } = createPronunciationDto;
    const record = this.create({ word, ipa, audioUrl, region, source });

    await this.save(record);

    return record;
  }

  async getPronunciationsByWordId(wordId: string): Promise<Pronunciation[]> {
    return this.find({ where: { word: wordId } });
  }
}
