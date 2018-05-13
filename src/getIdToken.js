/* @flow */
import {Auth} from 'aws-amplify';

export default function getIdToken(logging?: boolean = false): Promise<*> {
  return new Promise(async (resolve, reject) => {
    try {
      const session = await Auth.currentSession();

      if (logging) {
        console.log(session);
      }

      resolve(session.idToken.jwtToken);
    } catch (e) {
      reject(e);
    }
  });
}
