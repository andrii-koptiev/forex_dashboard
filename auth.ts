import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { EMAIL_LABEL, PASSWORD_LABEL } from 'utils';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      type: 'credentials',

      credentials: {
        email: {
          label: EMAIL_LABEL,
          type: 'email',
        },
        password: { label: PASSWORD_LABEL, type: 'password' },
      },
      async authorize(credentials) {
        const credentialDetails = {
          email: credentials.email,
          password: credentials.password,
        };

        const resp = await fetch(`${process.env.BASE_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentialDetails),
        });

        const user = await resp.json();
        if (user) {
          return user;
        } else {
          console.log('Invalid credentials');
          return null;
        }
      },
    }),
  ],
});
