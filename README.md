# @gemcook/auth

## Getting Start

### Install

```Shell
yarn add @gemcook/auth
```

### Import

```JavaScript
import {
  initAmplify,
  checkSession,
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  changePassword,
  forgotPassword,
  confirmForgotPassword,
  getIdToken,
  getUserClaim,
  registeSNSUser,
  signInSNS,
  errorMessages,
  updateAttributes,
  resendSignUp,
} from '@gemcook/auth';
```

## Usage

### initAmplify

```JavaScript
import {initAmplify} from '@gemcook/auth';

initAmplify(
  env.COGNITO_REGION,
  env.COGNITO_USER_POOL_ID,
  env.COGNITO_CLIENT_ID
);
```

## Contributing

### Install

```Shell
yarn
```

### Build

```Shell
make build
```

## License

[MIT](https://github.com/gemcook/auth/blob/master/LICENSE)
