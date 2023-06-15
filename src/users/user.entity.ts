import { Preference } from "../preferences/preference.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  email: string;

  @Column()
  password: string; 

  @OneToOne(() => Preference, (preference) => preference.user)
  preference: Preference
}