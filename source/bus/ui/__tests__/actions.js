// Actions
import { uiActions } from '../actions';

describe('ui actions', () => {
    test('start fetching', () => {
        expect(uiActions.startFetching()).toMatchSnapshot();
    });

    test('stop fetching', () => {
        expect(uiActions.stopFetching()).toMatchSnapshot();
    });

    test('set online state', () => {
        expect(uiActions.setOnlineState()).toMatchSnapshot();
    });

    test('set offline state', () => {
        expect(uiActions.setOfflineState()).toMatchSnapshot();
    });

    test('emit error', () => {
        expect(uiActions.emitError(__.error)).toMatchSnapshot();
    });
});
