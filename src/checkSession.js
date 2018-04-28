/* @flow */
import {Auth} from 'aws-amplify';

export default function checkSession(logging: boolean): Promise<*> {
  const doLogging = !!logging;

  return new Promise(async (resolve, reject) => {
    try {
      const session = await Auth.currentSession();

      if (doLogging) {
        console.warn(session);
      }

      resolve(true);
    } catch (e) {
      reject(false);
    }
  });
}
