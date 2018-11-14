/* @flow */
import {Auth} from 'aws-amplify';

export default async function resendSignUp(username: string): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.resendSignUp(username)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
