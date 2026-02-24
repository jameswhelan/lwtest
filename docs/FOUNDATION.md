# Foundation — LendWell Design System

Design foundation for the LendWell Design System. This file can be replaced or extended with content exported from [Zero Height](https://zeroheight.com/3962705dc/p/799007-foundation). The Zero Height MCP endpoint for this design system is:

`https://mcp.zeroheight.com/mcp/18c7b5557ef8a3ad69550fa987841f9fec1d6a52`

---

## Design tokens (this repo)

Defined in `src/tokens/tokens.css`. Use these via Tailwind or CSS variables; do not hardcode values.

### Color

- **Primary** — `--lw-primary-50` through `--lw-primary-950` (Tailwind: `bg-primary-600`, `text-primary-700`, etc.)
- **Neutral** — `--lw-neutral-50` through `--lw-neutral-950`
- **Semantic** — `--lw-success`, `--lw-error`, `--lw-warning` and `-light` variants

### Typography

- **Font** — `--lw-font-sans` (Inter), `--lw-font-mono`
- **Size** — `--lw-text-xs` through `--lw-text-3xl`
- **Line height** — `--lw-leading-xs` through `--lw-leading-3xl`
- **Weight** — `--lw-font-medium` (500), `--lw-font-semibold` (600), `--lw-font-bold` (700)

### Spacing

- 4px base scale: `--lw-space-1` (4px) through `--lw-space-16` (64px)
- Tailwind: `p-lw-4`, `gap-lw-2`, etc.

### Radius & shadow

- **Radius** — `--lw-radius-sm` through `--lw-radius-full`
- **Shadow** — `--lw-shadow-sm`, `--lw-shadow-md`, `--lw-shadow-lg`

---

## Principles

1. **Use tokens** — No hardcoded colors, spacing, or font sizes.
2. **Use components** — Prefer `src/components` over custom markup.
3. **Tailwind + cn()** — Style with Tailwind; use `cn()` for conditional classes.
4. **Accessibility** — Keep ARIA and semantic structure; meet contrast requirements.

---

## Components (summary)

| Component   | Use for |
|------------|---------|
| Button     | Actions (primary, secondary, outline, ghost, destructive, link) |
| Input      | Single-line text with label, error, hint |
| Textarea   | Multi-line text |
| Select     | Single choice from a list |
| Checkbox   | Boolean or multi-select |
| Radio / RadioGroup | Single choice from 2–5 options |
| Switch     | On/off settings |
| Card       | Grouped content (elevated, outlined, filled) |
| Badge      | Status, category, count |
| Typography | Headings and body (h1–h4, body, caption, label) |
| Modal      | Focused dialogs |
| Alert      | Inline feedback (info, success, warning, error) |
| Tabs       | Switching between views |
| Avatar     | User image or initials |
| Spinner    | Loading state |
| Tooltip    | Hover help |
| Progress   | Completion or progress |
| Separator  | Divider (horizontal/vertical) |
| Link       | Navigation links |
| Skeleton   | Loading placeholders |
| Label      | Form labels |

Import from `./components` or `./path-to-lendwell/src/components`. See `.lovable/rules/components/` for detailed usage.
