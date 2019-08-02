/* @flow */
import {Auth} from 'aws-amplify';
import store from 'store/dist/store.modern';

export default function signOut(): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.signOut()
      .then(async data => {
        await store.clearAll();
        window.isAuthed = false;
        window.location.href = '/';
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
