import { IsString, IsBoolean, IsNotEmpty, IsIn } from "class-validator";

const languageAvailable = ['Portuguese', 'English', 'French'];

export class CreatePreferenceDto {
  /**
   * termsAndConditions, showProfilePreference and showLanguagePreference are all properties of type boolean.
   * All 3 of the properties need to be assigned.
   */
  @IsNotEmpty({ message: 'Terms and Conditions not selected' })
  @IsBoolean()
  termsAndConditions: boolean;

  @IsNotEmpty({ message: 'Show profile field not selected' })
  @IsBoolean()
  showProfilePreference: boolean;

  @IsNotEmpty({ message: 'Show language field not selected' })
  @IsBoolean()
  showLanguagePreference: boolean; 

  /**
   * languagePreference is of type string and is restricted to 3 type of language:'Portuguese', 'English', 'Frence'. 
   *  Mind that the capitalized form of the string.
   */
  @IsNotEmpty({ message: 'Terms and Conditions not selected' })
  @IsString()
  @IsIn(languageAvailable)
  languagePreference: string;

}