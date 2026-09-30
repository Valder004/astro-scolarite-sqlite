import { AstroAuth } from "@auth/astro";
import Google from "@auth/core/providers/google";

export const { GET, POST } = AstroAuth({
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});