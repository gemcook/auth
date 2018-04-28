/* @flow */
import {CognitoAuth} from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import federation from './federation';

export default function registeSNSUser(snsType: string): Promise<*> {
  let config = federation;
  config.IdentityProvider = snsType;

  const auth = new CognitoAuth(config);

  return new Promise((resolve, reject) => {
    auth.useCodeGrantFlow();

    // 実際にSNSとの連携を行う (callback先に遷移される)
    auth.getSession();
  });
}
