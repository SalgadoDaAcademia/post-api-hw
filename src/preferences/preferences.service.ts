import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Preference } from './preference.entity';
import { CreatePreferenceDto } from './dtos/create-preference.dto';
import { User } from '../users/user.entity';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class PreferencesService {
  constructor(@InjectRepository(Preference) private repo: Repository<Preference>){}

  /**
   * It creates an instance of Preference and persists it in the database.
   * @param prefereceDto 
   * @param user 
   * @returns 
   */
    create(prefereceDto: CreatePreferenceDto, user: User) {
      if(!user){
        throw new NotFoundException('Cannot create preference, user not found'); 
      }

      const preference = this.repo.create(prefereceDto);
      preference.user = user;
      return this.repo.save(preference);
    }
  }

