// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unlikePost ({ payload: postId }) {
    yield put(uiActions.startFetching());

    try {
        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        const userId = yield select((state) =>
            state.profile.get('id')
        );

        yield put(postActions.unlikePost({ userId, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unlikePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
