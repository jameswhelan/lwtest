# Colors

Use LendWell design tokens. Never hardcode hex values.

## Tailwind Classes

- **Primary**: `bg-primary-500`, `text-primary-600`, `border-primary-400`
- **Neutral**: `bg-neutral-100`, `text-neutral-700`, `border-neutral-300`
- **Semantic**: `bg-success`, `text-error`, `bg-warning-light`

## CSS Variables

Defined in `src/tokens/tokens.css`:

- `--lw-primary-*` (50–950)
- `--lw-neutral-*` (50–950)
- `--lw-success`, `--lw-error`, `--lw-warning`

Sync from Figma: use `get_variable_defs` on the LendWell Design System file to update tokens.
