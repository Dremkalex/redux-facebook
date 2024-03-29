// Reducer
import { profileReducer } from "../reducer";

// Actions
import { profileActions } from "../actions";

describe("profile reducer:", () => {
    test("should return initial state by default", () => {
        expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
    });

    test("should handle a FILL_PROFILE action", () => {
        expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
    });

    test("should handle a CLEAR_PROFILE action", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });

    test("should handle an UPDATE_AVATAR action", () => {
        expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
    });
});
