/* @flow */
import {Auth} from 'aws-amplify';

export default function confirmSignUp(
  username: string,
  code: string,
): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.confirmSignUp(username, code)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
