import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>){}

  /**
   * It creates an instance of User and persists it in the database.
   * @param email 
   * @param password 
   * @returns 
   */
  create(email: string, password: string){
    const user = this.repo.create({ email, password })

    return this.repo.save(user);

  }
  /**
   * It returns instance of User when inputted its id.
   * @param id 
   * @returns 
   */
  findOne(id: number){
    return this.repo.findOneBy({id})
  }

  /**
   * It returns an instance of User when a email through a given email.
   * @param email 
   * @returns 
   */
  find(email: string){
    return this.repo.find({ where: {email} })
  }
}
