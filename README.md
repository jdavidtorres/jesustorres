# Jesus Torres CV

Static CV for Jesus Torres, built with Astro and ready for GitHub Pages.

## Stack

- Astro
- TypeScript
- CSS variables
- GitHub Actions
- GitHub Pages

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deploy

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, go to `Settings > Pages`.
4. Select `GitHub Actions` as the source.
5. Push again or run the workflow manually.

For a project site such as `https://user.github.io/repo`, the Astro `base` path is derived from the repository name.

For a user site such as `https://user.github.io`, name the repository `user.github.io`.

## Custom domain

Set the `SITE_URL` environment variable in GitHub Actions if you use a custom domain.

Example:

```yaml
env:
  SITE_URL: https://jdavidtorres.github.io/jesustorres
  BASE_PATH: /
```

## Content policy

The current site intentionally shows company experience only.
