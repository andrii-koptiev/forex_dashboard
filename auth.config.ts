import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },

  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = request.nextUrl;

      if (nextUrl.pathname === '/auth/login') {
        if (isLoggedIn) {
          return Response.redirect(new URL('/users', nextUrl));
        } else {
          return true;
        }
      }

      if (!isLoggedIn) {
        return Response.redirect(new URL('/auth/login', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
