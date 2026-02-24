# Using LendWell Design System with Lovable

## Connect as a Design System

1. In Lovable, create a new **Design System** project (or convert this project).
2. Add this repository as the design system source.
3. In your app project: **Project Settings** → **Design Systems** → Add **LendWell Design System**.
4. When prompting Lovable, it will use these components and tokens for pixel-perfect prototypes.

## What Lovable Receives

- **`.lovable/system.md`** — Installation, guidelines, directory map
- **`.lovable/rules/components/*.md`** — Per-component docs (button, input, card, etc.)
- **`.lovable/rules/styling/*.md`** — Colors, typography rules
- **`docs/FOUNDATION.md`** — Foundation: tokens, principles, component summary
- **`src/components/`** — React components
- **`src/tokens/tokens.css`** — Design tokens

## Zero Height MCP (optional)

To give Lovable access to your full Zero Height documentation (e.g. Foundation):

- Add MCP server URL: `https://mcp.zeroheight.com/mcp/18c7b5557ef8a3ad69550fa987841f9fec1d6a52`
- Lovable (or your MCP client) can then fetch Zero Height docs when generating code.

## Prompting Lovable

Example prompts that will use the design system:

- "Build a loan application form using LendWell components"
- "Create a dashboard with Cards and Badges"
- "Add a modal for confirming the transaction"

Lovable will import from this design system and follow the rules in `.lovable/` and `docs/`.
