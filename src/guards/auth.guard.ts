import {
  CanActivate, 
  ExecutionContext
} from '@nestjs/common'
import { Observable } from 'rxjs'

/**
 * Class created to implement the Authguard function. 
 * AuthGuard is use to apply the authentication to specific endpoints.
 */
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext){
    const request = context.switchToHttp().getRequest();
    return request.session.userId; 
    }
  }
