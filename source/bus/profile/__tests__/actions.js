// Actions
import { profileActions } from '../actions';

describe('profile actions', () => {
    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });

    test('update avatar', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });

    test('clear profile', () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });

    test('update name async', () => {
        expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot();
    });

    test('update avatar async', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatar)).toMatchSnapshot();
    });

    test('update password async', () => {
        expect(profileActions.updatePasswordAsync(__.newPassword)).toMatchSnapshot();
    });
});
