import { Module } from '@nestjs/common';
import { SelepController } from './selep.controller';
import { SelepService } from './selep.service';

@Module({
  controllers: [SelepController],
  providers: [SelepService]
})
export class SelepModule {}
