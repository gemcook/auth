/* @flow */
import {Auth} from 'aws-amplify';

export default function getIdToken(logging: boolean): Promise<*> {
  const doLogging = !!logging;

  return new Promise(async (resolve, reject) => {
    try {
      const session = await Auth.currentSession();

      if (doLogging) {
        console.log(session);
      }

      resolve(session.idToken.payload);
    } catch (e) {
      reject(e);
    }
  });
}
