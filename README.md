# openKPI

Dokumentations-Site für openKPI, gebaut mit [VitePress](https://vitepress.dev).

## Voraussetzungen

- [Node.js](https://nodejs.org/) **>= 18**
- [npm](https://www.npmjs.com/) **>= 9** (alternativ pnpm oder yarn)

## Projektstruktur

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.mts        # VitePress-Konfiguration (Nav, Sidebar, Theme)
│   ├── guide/
│   │   ├── introduction.md
│   │   └── features.md
│   ├── about.md
│   ├── getting-started.md
│   └── index.md              # Startseite (Hero-Layout)
├── package.json
├── .gitignore
└── README.md
```

Markdown-Dateien unter `docs/` werden automatisch zu HTML-Seiten gerendert.
Die Datei `docs/.vitepress/config.mts` definiert Navigation, Sidebar und
weitere Theme-Einstellungen.

## Installation

```bash
npm install
```

## Entwicklung

Lokalen Dev-Server mit Hot Reload starten:

```bash
npm run docs:dev
```

Die Seite ist anschließend standardmäßig unter
`http://localhost:5173` erreichbar.

## Build

Statische Seite produktiv bauen:

```bash
npm run docs:build
```

Die Build-Artefakte liegen unter:

```
docs/.vitepress/dist
```

Dieser Ordner kann unverändert auf einem beliebigen Static-Hosting
(z. B. GitHub Pages, Netlify, S3, Nginx) ausgeliefert werden.

## Build vorschauen

Den erzeugten Build lokal testen:

```bash
npm run docs:preview
```

## Verfügbare Skripte

| Skript                 | Zweck                                              |
| ---------------------- | -------------------------------------------------- |
| `npm run docs:dev`     | Startet den Entwicklungsserver mit Hot Reload      |
| `npm run docs:build`   | Erzeugt die statische Site unter `docs/.vitepress/dist` |
| `npm run docs:preview` | Liefert den fertigen Build lokal aus               |

## Neue Seite hinzufügen

1. Neue `.md`-Datei unter `docs/` (oder einem Unterordner) anlegen.
2. Optional Front-Matter-Block am Dateianfang hinzufügen
   (`title`, `description`, `layout`, …).
3. Verlinkung in `docs/.vitepress/config.mts` (Nav/Sidebar) ergänzen,
   damit die Seite in der Navigation erscheint.

## Deployment-Hinweise

- Bei Hosting unter einem Unterpfad (z. B. `https://example.com/docs/`)
  in `docs/.vitepress/config.mts` die Option `base: '/docs/'` setzen.
- Der Build ist rein statisch – es ist kein Node.js-Server zur Laufzeit nötig.

## Lizenz

MIT
