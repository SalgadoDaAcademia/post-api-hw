import { Test, TestingModule } from '@nestjs/testing';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Preference } from './preference.entity';

describe('PreferencesController', () => {
  let controller: PreferencesController;
  let fakePreferenceService: Partial<PreferencesController>

  beforeEach(async () => {
    fakePreferenceService = {
      
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferencesController],
      providers: [PreferencesService,
        { provide: getRepositoryToken(Preference), 
          useValue: {}} ]
    }).compile();

    controller = module.get<PreferencesController>(PreferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
