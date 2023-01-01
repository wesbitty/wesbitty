import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  login: handleLogin((req) => {
    return {
      authorizationParams: { connection: 'github' }
    };
  })
});