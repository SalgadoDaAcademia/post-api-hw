import { Preference } from "./preference.entity";

test('Event should be initialized through constructor', () => {
  const preference = new Preference(true, 'English', true, true);

  expect(preference).toEqual({
    termsAndConditions: true,
    languagePreference: 'English',
    showProfilePreference: true,
    showLanguagePreference: true
  })
});