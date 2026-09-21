import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

// Plugin to pre-generate directory index.html files for GitHub Pages multi-page routing
function githubPagesMultiRoutePlugin(): Plugin {
  return {
    name: 'github-pages-multi-route',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) return;

      const indexHtml = fs.readFileSync(indexPath, 'utf-8');

      // Sub-routes to generate static fallback index files for GitHub Pages
      const routes = [
        'gioi-thieu',
        'giai-phap',
        'quy-trinh',
        'nang-luc',
        'du-an',
        'du-toan',
        'lien-he',
        'about',
        'solutions',
        'process',
        'tech-stack',
        'case-studies',
        'estimator',
        'contact',
      ];

      routes.forEach((route) => {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml, 'utf-8');
      });

      // Also ensure dist/404.html exists
      const fallback404 = path.join(distDir, '404.html');
      if (!fs.existsSync(fallback404)) {
        fs.writeFileSync(fallback404, indexHtml, 'utf-8');
      }
    },
  };
}

export default defineConfig(() => {
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || isGitHubActions;

  // Base path calculation: On GitHub Pages under repo /sunny-tech-site/
  const basePath = process.env.BASE_PATH
    ? (process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`)
    : isGitHubPages
      ? '/sunny-tech-site/'
      : '/';

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), githubPagesMultiRoutePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
