# LendWell Design System

## Installation

1. **Dependencies**: React 18+, Tailwind CSS 3.x, clsx
   ```bash
   npm install clsx
   ```

2. **Import tokens** in your app entry (e.g., `main.tsx` or `index.css`):
   ```tsx
   import "./path-to-lendwell/src/tokens/tokens.css";
   ```

3. **Tailwind config**: Extend with LendWell theme from `tailwind.config.js` (merge colors, spacing, borderRadius, etc.).

4. **Components**:
   ```tsx
   import { Button, Input, Card } from "./path-to-lendwell/src/components";
   ```

## Asset Links

- Font: Inter — add to HTML:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  ```

## Directory Guide

- `src/components/` — All React components. Import from `./components` or individual paths.
- `src/tokens/tokens.css` — Design tokens. Sync from Figma Variables.
- `src/lib/cn.ts` — `cn()` for merging class names.
- `docs/` — Design system documentation. See `docs/FOUNDATION.md` for tokens and principles. Zero Height MCP: `https://mcp.zeroheight.com/mcp/18c7b5557ef8a3ad69550fa987841f9fec1d6a52` (add as MCP server for full Zero Height docs).

## Components Available

Button, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch, Card (with CardHeader, CardTitle, CardDescription, CardContent, CardFooter), Badge, Typography, Modal, Alert, Tabs, Avatar, Spinner, Tooltip, Progress, Separator, Link, Skeleton, Label.

## General Guidelines

- **Design tokens**: Never hardcode colors/spacing. Use tokens: `bg-primary-600`, `text-lw-base`, `rounded-lw-md`, etc.
- **Components**: Prefer LendWell components over custom implementations.
- **Styling**: Tailwind only. Use `cn()` for conditional classes.
- **Accessibility**: Components include ARIA attributes. Preserve when extending.

## Figma Source

Canonical file: **[Design System](https://www.figma.com/design/WXFH6NEl569UGViyMq7vZr/Design-System)** (file key `WXFH6NEl569UGViyMq7vZr`). Also: LendWell Design System, Design System 2.0 (same file).

Sync tokens from Figma Variables (get_variable_defs) or inspect design specs. Update `src/tokens/tokens.css` with exact values for pixel-perfect match. For MCP: use Figma desktop at http://127.0.0.1:3845/mcp with this file open and node selected.
