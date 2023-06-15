import { Module } from '@nestjs/common';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preference } from './preference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preference])],
  controllers: [PreferencesController],
  providers: [PreferencesService]
})
export class PreferencesModule {}
