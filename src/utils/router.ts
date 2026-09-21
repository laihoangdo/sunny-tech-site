/**
 * Determines the router basename dynamically based on environment.
 * On GitHub Pages (e.g. https://<user>.github.io/sunny-tech-site/...),
 * it returns '/sunny-tech-site'.
 * On localhost, Cloud Run, or custom domain, it returns ''.
 */
export function getRouterBasename(): string {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Detect GitHub Pages deployment under a repository path
    if (hostname.endsWith('github.io')) {
      const firstSegment = pathname.split('/').filter(Boolean)[0];
      if (firstSegment === 'sunny-tech-site') {
        return '/sunny-tech-site';
      }
    }
  }

  // Fallback to Vite configured base if present and not relative
  const viteBase = import.meta.env.BASE_URL;
  if (viteBase && viteBase !== './' && viteBase !== '/') {
    return viteBase.replace(/\/$/, '');
  }

  return '';
}
