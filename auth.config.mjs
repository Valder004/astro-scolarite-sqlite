import 'dotenv/config';
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

const secret = process.env.AUTH_SECRET || import.meta.env.AUTH_SECRET;

export default defineConfig({
  secret: secret,
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || import.meta.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account',
        },
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/`;
    },
  },
});