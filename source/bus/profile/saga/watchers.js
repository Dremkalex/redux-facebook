// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { updateName, updateAtatar } from './workers';

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAtatar);
}

export function* watchProfile () {
    yield all([call(watchUpdateName), call(watchUpdateAvatar)]);
}
