/* @flow */
import {Auth} from 'aws-amplify';

export default function forgotPassword(username: string): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.forgotPassword(username)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
