# openKPI

Documentation site for openKPI, built with [VitePress](https://vitepress.dev).

## Requirements

- [Node.js](https://nodejs.org/) **>= 18**
- [npm](https://www.npmjs.com/) **>= 9** (alternatively pnpm or yarn)

## Project Structure

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.mts        # VitePress configuration (nav, sidebar, theme)
│   ├── specification/
│   │   ├── introduction.md
│   │   ├── core-kpi.md
│   │   ├── units-of-measurement.md
│   │   ├── aggregation.md
│   │   ├── time-window.md
│   │   └── transport/
│   │       ├── api.md
│   │       └── event.md
│   ├── sdks/
│   │   └── introduction.md
│   ├── examples/
│   │   ├── financial-kpis.md
│   │   ├── energy-suppliers.md
│   │   └── ecommerce.md
│   ├── more/
│   │   └── about.md
│   ├── getting-started.md
│   └── index.md              # Landing page (hero layout)
├── package.json
├── .gitignore
└── README.md
```

Markdown files under `docs/` are automatically rendered as HTML pages.
The file `docs/.vitepress/config.mts` defines the navigation, sidebar
and other theme settings.

## Installation

```bash
npm install
```

## Development

Start the local dev server with hot reload:

```bash
npm run docs:dev
```

The site is then available at `http://localhost:5173` by default.

## Build

Build the static site for production:

```bash
npm run docs:build
```

The build artifacts are written to:

```
docs/.vitepress/dist
```

This folder can be served as-is by any static host
(e.g. GitHub Pages, Netlify, S3, Nginx).

## Preview the Build

Test the generated build locally:

```bash
npm run docs:preview
```

## Available Scripts

| Script                 | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run docs:dev`     | Starts the development server with hot reload               |
| `npm run docs:build`   | Generates the static site at `docs/.vitepress/dist`         |
| `npm run docs:preview` | Serves the generated build locally                          |

## Adding a New Page

1. Create a new `.md` file under `docs/` (or a subfolder).
2. Optionally add a front-matter block at the top of the file
   (`title`, `description`, `layout`, …).
3. Add a link in `docs/.vitepress/config.mts` (nav/sidebar) so the
   page shows up in the navigation.

## Deployment Notes

- When hosting under a sub-path (e.g. `https://example.com/docs/`),
  set the `base: '/docs/'` option in `docs/.vitepress/config.mts`.
- The build is fully static — no Node.js server is required at runtime.

## License

MIT
