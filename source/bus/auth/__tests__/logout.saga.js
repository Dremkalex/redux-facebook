// Core
import { apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../REST';
import { book } from '../../../navigation/book';
import { uiActions } from '../../ui/actions';
import { profileActions } from '../../profile/actions';
import { postActions } from '../../posts/actions';
import { authActions } from '../../auth/actions';
import { usersActions } from '../../users/actions';
import { logout } from '../saga/workers';

describe('logout saga:', () => {
    test('should complete a 204 status response scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseSuccess204]])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authActions.logout())
            .put(replace(book.login))
            .run();
    });

    test('should complete a 400 status response scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseFail400]])
            .put(uiActions.emitError(__.error, 'logout worker'))
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authActions.logout())
            .put(replace(book.login))
            .run();
    });
});
