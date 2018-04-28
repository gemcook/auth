/* @flow */
import {Auth} from 'aws-amplify';

export default async function signIn(
  username: string,
  password: string,
): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.signIn(username, password)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
