/* @flow */
import {Auth} from 'aws-amplify';

export default function getIdToken(
  attributes: Object,
  logging?: boolean = false,
): Promise<*> {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const result = await Auth.updateUserAttributes(user, attributes);

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
