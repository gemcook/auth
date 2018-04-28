/* @flow */
import {Auth} from 'aws-amplify';

export default function changePassword(
  oldPassword: string,
  newPassword: string,
): Promise<*> {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const data = Auth.changePassword(user, oldPassword, newPassword);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
