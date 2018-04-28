/* @flow */
import {Auth} from 'aws-amplify';
import {CognitoAuth} from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import federation from './federation';

export default function signInSNS(): Promise<*> {
  let config = federation;

  return new Promise((resolve, reject) => {
    const url = window.location.href;

    const auth = new CognitoAuth(config);

    const urlSearchParams = new URLSearchParams(location.search);
    const isError = urlSearchParams.has('error_description');
    if (isError) {
      reject();
      return;
    }

    auth.userhandler = {
      onSuccess: async result => {
        const session = await Auth.currentSession();
        resolve(session.idToken.payload);
      },
      onFailure: err => {
        reject(err.error);
      },
    };

    // localStorageにJWTを保存
    auth.parseCognitoWebResponse(url);
  });
}
