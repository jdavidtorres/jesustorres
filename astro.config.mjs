import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPagesHost = repository?.endsWith('.github.io') ?? false;
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'https://jdavidtorres.github.io');
const base = process.env.BASE_PATH ?? (repository && !isGithubPagesHost ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always'
});
