import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true,
  baseURL: "https://scolarite.valentin-deroo.fr",
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});