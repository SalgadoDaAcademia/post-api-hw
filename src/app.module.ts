import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreferencesModule } from './preferences/preferences.module';
import { User } from './users/user.entity'; 
import { UsersModule } from './users/users.module'; 
import { Preference } from './preferences/preference.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite', 
    entities: [User, Preference], 
    synchronize: true, 
}),
    PreferencesModule, 
    UsersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
