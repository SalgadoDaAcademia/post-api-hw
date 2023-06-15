import { Test, TestingModule } from '@nestjs/testing';
import { PreferencesService } from './preferences.service';
import { Preference } from './preference.entity'; 
import { UsersService } from '../users/users.service';   
import { User } from '../users/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('PreferencesService', () => {
  let service: PreferencesService;
  let mockPreferenceDto: {
    termsAndConditions: true,
    languagePreference:'English',
    showProfilePreference:true,
    showLanguagePreference: true
  }
  const mockUser = {id:1, email: 'fernando@gmail.com', password: 'Toughkey3', Preference: {}}

  beforeEach(async () => {
    let repository: Repository<Preference>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferencesService,

      { provide: Preference, 
        useClass:jest.fn(() => ({
          create: jest.fn(),
          save: jest.fn(),
        }))}
      ],
    }).compile();
    repository = module.get<Repository<Preference>>(Repository);

    service = module.get<PreferencesService>(PreferencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
