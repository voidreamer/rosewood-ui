# Contributing to Rosewood UI

Thanks for wanting to help! 🌹

## How to Contribute

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Make changes
4. Build: `node build.js`
5. Test examples in browser
6. Commit: `git commit -m "Add my feature"`
7. Push and open a PR

## Guidelines

- **Naming:** Use `rw-` prefix. BEM-like: `rw-component`, `rw-component--variant`, `rw-component__element`
- **No JavaScript:** CSS only
- **Comments:** Each component file should have a header explaining usage
- **Variables:** Use existing CSS variables. Add new ones to `variables.css` if needed
- **Warmth:** No cold colors. Keep the cozy aesthetic 🔥

## Adding a Component

1. Create `src/css/components/your-component.css`
2. Add `@import` to `src/css/rosewood.css`
3. Add examples to `examples/components.html`
4. Update README component table

## License

By contributing, you agree your contributions are MIT licensed.
