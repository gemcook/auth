/* @flow */
export default {
  UserPoolId: process.env.AWS_USER_POOL_ID || '',
  ClientId: process.env.AWS_CLIENT_ID || '',
  AppWebDomain: process.env.APP_WEB_DOMAIN || '',
  RedirectUriSignIn: process.env.REDIRECT_DOMAIN || '',
  RedirectUriSignOut: process.env.REDIRECT_DOMAIN || '',
  IdentityProvider: '',
  TokenScopesArray: [
    'profile',
    'email',
    'openid',
    'aws.cognito.signin.user.admin',
    'phone',
  ],
  AdvancedSecurityDataCollectionFlag: true,
};
