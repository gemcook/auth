/* @flow */
import {Auth} from 'aws-amplify';

export default async function signUp(
  email: string,
  password: string,
  attributes: Object,
): Promise<*> {
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

  try {
    return Auth.signUp(params);
  } catch (error) {
    throw error;
  }
}
