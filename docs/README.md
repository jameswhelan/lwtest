# LendWell Design System — Documentation

This folder holds design system documentation for **Lovable** and other consumers. Lovable reads `.lovable/` for rules and can use this repo as a design system source.

## Zero Height MCP

Design documentation is also available via **Zero Height MCP**. To let Lovable (or Cursor) use it:

- **MCP endpoint:** `https://mcp.zeroheight.com/mcp/18c7b5557ef8a3ad69550fa987841f9fec1d6a52`
- Add this URL as an MCP server in your tool (e.g. Cursor MCP settings) so agents can fetch Zero Height docs when generating code.
- Zero Height content (e.g. Foundation) will then be available to the agent alongside this repo.

## In-repo docs

- **[FOUNDATION.md](./FOUNDATION.md)** — Foundation: design tokens, principles, and usage (synced from Zero Height when possible).
- **[LOVABLE-PROMPT-FOR-PROTOTYPERS.md](./LOVABLE-PROMPT-FOR-PROTOTYPERS.md)** — Copy-paste prompt for prototypers to give Lovable so it uses the design system faithfully and can add new components that follow the same patterns.
- **Component rules** — See `.lovable/rules/components/` for per-component usage.
- **System overview** — See `.lovable/system.md` for installation and guidelines.

## Keeping docs in sync

1. Export or copy content from [Zero Height](https://zeroheight.com/) (e.g. Foundation) and paste into `docs/FOUNDATION.md`.
2. Or configure the Zero Height MCP server so agents can fetch docs automatically.
