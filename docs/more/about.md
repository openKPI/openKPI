---
title: About
description: Background on the project
---

# About openKPI

openKPI is a community project with the goal of providing a simple
and open tool for working with key performance indicators.

## Contributing

We welcome contributions in any form:

- Report issues
- Submit pull requests
- Improve the documentation
- Add translations

## License

This project is released under the **CC-BY 4.0 License**.

## Contact

Questions and suggestions can be raised via the repository's
[issue tracker](https://github.com/openKPI/openKPI/issues).

## Built With

A big thank you to the projects that help us build and run openKPI:

<div class="logo-wall">
  <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener">
    <img src="/logos/claude.svg" alt="Claude logo" />
    <span>Claude</span>
  </a>
  <a href="https://github.com" target="_blank" rel="noopener" class="logo-github">
    <img src="/logos/github.svg" alt="GitHub logo" />
    <span>GitHub</span>
  </a>
  <a href="https://daringfireball.net/projects/markdown/" target="_blank" rel="noopener" class="logo-markdown">
    <img src="/logos/markdown.svg" alt="Markdown logo" />
    <span>Markdown</span>
  </a>
  <a href="https://www.netlify.com" target="_blank" rel="noopener">
    <img src="/logos/netlify.svg" alt="Netlify logo" />
    <span>Netlify</span>
  </a>
  <a href="https://www.npmjs.com" target="_blank" rel="noopener">
    <img src="/logos/npm.svg" alt="npm logo" />
    <span>npm</span>
  </a>
  <a href="https://vitepress.dev" target="_blank" rel="noopener">
    <img src="/logos/vitepress.svg" alt="VitePress logo" />
    <span>VitePress</span>
  </a>
  <a href="https://vuejs.org" target="_blank" rel="noopener">
    <img src="/logos/vuedotjs.svg" alt="Vue.js logo" />
    <span>Vue.js</span>
  </a>
</div>

<style>
.logo-wall {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}
.logo-wall a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  min-width: 160px;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  transition: border-color .2s, color .2s, transform .2s;
}
.logo-wall a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.logo-wall img {
  width: 48px;
  height: 48px;
  display: block;
}
html.dark .logo-wall .logo-github img,
html.dark .logo-wall .logo-markdown img {
  filter: invert(1);
}
</style>
