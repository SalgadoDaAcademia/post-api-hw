import { Body, Controller, Post, UseGuards, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { CreatePreferenceDto } from './dtos/create-preference.dto';
import { PreferencesService } from './preferences.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from '../users/dtos/current-user.decorator';

@Controller('v1/user/preferences')
export class PreferencesController {

  constructor(private preferenceService: PreferencesService){}
/**
 * Creates a new Preference through the call of a preferenceService function named create
 * @param body 
 * @param user 
 * @returns 
 */
 @UseInterceptors(ClassSerializerInterceptor)
 @Post()
 @UseGuards(AuthGuard)
 createPreference(@Body() body: CreatePreferenceDto, @CurrentUser() user) {
return this.preferenceService.create(body, user);
 } 
}
