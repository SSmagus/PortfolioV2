# Saumya Dhakad Portfolio

Plain React + Vite single-page portfolio.

## Development

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deployment

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback is handled by `public/_redirects`.

Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback is handled by `vercel.json`.
