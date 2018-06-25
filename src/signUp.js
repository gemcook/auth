/* @flow */
import {Auth} from 'aws-amplify';

export default function signUp(
  email: string,
  password: string,
  attributes: Object,
): Promise<*> {
  return new Promise((resolve, reject) => {
    let params: {
      username: string,
      password: string,
      attributes?: any,
    } = {
      username: email,
      password: password,
    };

    if (Object.keys(attributes).length !== 0) {
      params.attributes = attributes;
    }

    Auth.signUp(params)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.warn(err);
        resolve(err);
      });
  });
}
