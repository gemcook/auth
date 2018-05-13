/* @flow */
import {Auth} from 'aws-amplify';

export default function checkSession(logging?: boolean = false): Promise<*> {
  return new Promise(async (resolve, reject) => {
    try {
      const session = await Auth.currentSession();

      if (logging) {
        console.warn(session);
      }

      resolve(true);
    } catch (e) {
      reject(false);
    }
  });
}
