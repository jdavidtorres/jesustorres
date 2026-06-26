import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const home = new URL(import.meta.env.BASE_URL, site ?? 'https://example.com/').toString();

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${home}sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
