import { Expose } from "class-transformer";

export class PreferenceDto {
  @Expose()
  id:number;

  @Expose()
  termsAndConditions: boolean;

  @Expose()
  languagePreference: string;

  @Expose()
  showProfilePreference: boolean;

  @Expose()
  showLanguagePreference: boolean;

  @Expose()
  userId: number

}