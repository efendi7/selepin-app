import { Test, TestingModule } from '@nestjs/testing';
import { SelepService } from './selep.service';

describe('SelepService', () => {
  let service: SelepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelepService],
    }).compile();

    service = module.get<SelepService>(SelepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
