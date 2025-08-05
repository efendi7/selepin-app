import { Test, TestingModule } from '@nestjs/testing';
import { SelepController } from './selep.controller';

describe('SelepController', () => {
  let controller: SelepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelepController],
    }).compile();

    controller = module.get<SelepController>(SelepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
