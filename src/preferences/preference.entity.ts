import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from '../users/user.entity'

@Entity()
export class Preference {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  termsAndConditions: boolean;

  @Column()
  languagePreference: string;

  @Column()
  showProfilePreference: boolean;

  @Column()
  showLanguagePreference: boolean; 

  /**
   * Preference has a one-to-one relation with user. 
   * The decorator @JoinColumn() indicates that the table preference will hold the foreign key, which is call userId
   */
  @OneToOne(() => User, (user) => user.preference) 
  @JoinColumn()
  user: User

  constructor(
    termsAndConditions: boolean, 
    languagePreference: string, 
    showProfilePreference: boolean, 
    showLanguagePreference: boolean){
      this.languagePreference=languagePreference; 
      this.termsAndConditions=termsAndConditions;
      this.showLanguagePreference=showLanguagePreference;
      this.showProfilePreference=showProfilePreference;
    }
}