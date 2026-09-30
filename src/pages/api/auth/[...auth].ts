import { AstroAuth } from "auth-astro";
import authConfig from "../../../../auth.config.mjs";

export const { GET, POST } = AstroAuth(authConfig);