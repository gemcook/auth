/* @flow */
import {Auth} from 'aws-amplify';

export default function confirmForgotPassword(
  username: string,
  code: string,
  newPassword: string,
): Promise<*> {
  return new Promise((resolve, reject) => {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
