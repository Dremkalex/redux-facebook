// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../../auth/actions';
import { profileActions } from '../../../profile/actions';

export function* login ({ payload: credentials }) {
    yield put(uiActions.startFetching());

    try {
        const response = yield apply(api, api.auth.login, [credentials]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}