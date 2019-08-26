// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removePost ({ payload: id }) {
    yield put(uiActions.startFetching());

    try {
        const response = yield apply(api, api.posts.remove, [id]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(postActions.removePost(id));
    } catch (error) {
        yield put(uiActions.emitError(error, 'removePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
