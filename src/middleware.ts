import { getSession } from 'auth-astro/server';

export async function onRequest(context: any, next: any) {
  // Routes publiques (connexion et endpoints d'authentification)
  if (context.url.pathname.startsWith('/api/auth/') || context.url.pathname === '/login') {
    return next();
  }

  try {
    const session = await getSession(context.request);

    if (!session || !session.user) {
      return context.redirect('/login');
    }

    return next();
  } catch (error) {
    // Si la session est invalide ou manquante, rediriger proprement vers le login
    return context.redirect('/login');
  }
}