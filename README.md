# Binary Garden

The main Binary Garden site. Built with Next.js 16, React 19, Tailwind CSS v4, and [Flora](https://www.npmjs.com/package/@binarygarden/flora) (`@binarygarden/flora`) for theming and UI components.

## Getting Started

Requires Node.js 20.9+ and pnpm.

### PNPM
```bash
pnpm i
pnpm dev     # start the dev server
pnpm build   # production build
pnpm lint    # eslint
```

### Docker
```
docker build -t bg_image .
docker run -p 3000:3000 bg_image
```

Regardless of how you run the service, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

Projects shown on the home page are defined in `projects.yaml`.

## Deployment

Pushing to `main` builds the Docker image, pushes it to Artifact Registry, and deploys it to the `binary-garden` Cloud Run service (`.github/workflows/deploy.yaml`).
