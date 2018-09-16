/* @flow */
import Amplify from 'aws-amplify';

export default function initAmplify(
  region: string,
  userPoolId: string,
  userPoolWebClientId: string,
) {
  Amplify.configure({
    Auth: {
      region: region,
      userPoolId: userPoolId,
      userPoolWebClientId: userPoolWebClientId,
    },
  });
}
