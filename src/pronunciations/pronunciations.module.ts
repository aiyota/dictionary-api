import { Module } from '@nestjs/common';
import { PronunciationsController } from './pronunciations.controller';
import { PronunciationsService } from './pronunciations.service';

@Module({
  controllers: [PronunciationsController],
  providers: [PronunciationsService]
})
export class PronunciationsModule {}
