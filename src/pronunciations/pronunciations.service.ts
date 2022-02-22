import { Injectable } from "@nestjs/common";
import { PronunciationRepository } from "./pronunciation.repository";

@Injectable()
export class PronunciationsService {
  constructor(private pronunciationRepository: PronunciationRepository) {}
}
