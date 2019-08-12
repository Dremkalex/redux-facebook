import { MAIN_URL, groupId } from './config';

export const api = {
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
        create (comment) {
            console.log(comment);

            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    'x-no-auth':    groupId,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
        },
    },
};
