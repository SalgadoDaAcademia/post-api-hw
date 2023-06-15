import { Body, Controller, Get, Post, Param, Query, Session, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './dtos/current-user.decorator';
import { User } from './user.entity';
import { AuthGuard } from '../guards/auth.guard';

@Controller('/v1/user')
export class UsersController {

constructor(
  private usersService: UsersService,
  private authService: AuthService){}

  /**
   * It creates an User by call the authService function signup.
   * @param body 
   * @param session 
   * @returns 
   */
@Post('/signup')
async createUser(@Body() body: CreateUserDto, @Session() session: any) {
  console.log(body.email)
  const user =  await this.authService.signup(body.email, body.password)
  session.userId = user.id
  return user;
}
/**
 * It logins a registered user to the session by calling the authService
 * @param body 
 * @param session 
 * @returns 
 */
@Post('/signin')
async signin(@Body() body: CreateUserDto, @Session() session: any){
const user = await this.authService.signin(body.email,body.password)
session.userId = user.id;
return user;
}

/**
 * Returns the user login data.
 * @param user 
 * @returns 
 */
@Get('/whoami')
@UseGuards(AuthGuard)
whoAmI(@CurrentUser() user: User){
return user;
}

/**
 * It log the user out of the session
 * @param session 
 */
@Post('/signout')
signOut(@Session() session: any){
  session.userId = null;
}

@Get('/:id')
findUser(@Param('id') id: string){
  return this.usersService.findOne(parseInt(id)); 
}

@Get()
findAll(@Query('email') email: string) {

  return this.usersService.find(email)
}
}