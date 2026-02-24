# Lovable prompt for prototypers

Copy the prompt below and use it when starting a prototype in Lovable (e.g. in the first message or in project instructions). It tells Lovable to follow the LendWell design system while allowing new components when needed.

---

## Prompt (copy from here)

**Use the LendWell Design System from this repo for this project:** https://github.com/jameswhelan/lwtest  
Ensure this design system is connected in Project Settings → Design Systems. Use its components, tokens, and rules (`.lovable/system.md`, `docs/FOUNDATION.md`, `.lovable/rules/`) as the source of truth. Follow its patterns and visual design in everything you build.

**Rules you must follow:**
- **Tokens only:** Use design tokens for all color, spacing, typography, radius, and shadow. No hardcoded hex colors, pixel spacing, or arbitrary font sizes. Use the LendWell Tailwind theme (e.g. `bg-primary-600`, `text-lw-base`, `rounded-lw-md`, `p-lw-4`, `shadow-lw-sm`).
- **Prefer existing components:** Use LendWell components (Button, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch, Card, Badge, Typography, Modal, Alert, Tabs, Avatar, Spinner, Tooltip, Progress, Separator, Link, Skeleton, Label) wherever they fit. Import from the design system.
- **Visual consistency:** Match the design system’s look and feel—primary/secondary/neutral palette, Inter font, spacing scale, border radius, and shadows. New UI should feel like part of the same system.
- **Styling approach:** Use Tailwind only. Use `cn()` for conditional or combined class names. No inline styles except for truly dynamic values (e.g. width from props).
- **Accessibility:** Preserve semantic HTML and ARIA patterns from the design system. Maintain focus states and contrast.

**When you need something that doesn’t exist in the design system:**
- You may create new components or patterns.
- New components must still use **only** LendWell tokens (colors, spacing, typography, radius, shadow). Follow the same structure: variants via props, `cn()` for classes, TypeScript types.
- Match the visual language: same primary/neutral palette, same spacing scale, same radius and shadow usage. The result should look like it belongs in the LendWell system, not a different UI kit.
- Prefer extending or composing existing components (e.g. a new card type built from Card + Badge) over building from scratch when possible.

**In short:** Use the LendWell design system repo (https://github.com/jameswhelan/lwtest) as the single source of truth for look, feel, and patterns. Use its components first; when you add new ones, build them the same way and with the same tokens so prototypes stay consistent and on-brand.

---

## Short version (for quick paste)

Use the LendWell Design System from https://github.com/jameswhelan/lwtest (connect it in Design Systems if needed). Use its components and tokens for all UI; no hardcoded colors or spacing. If you need a component that doesn’t exist, create it using the same tokens, Tailwind, and visual patterns so it matches the system. Keep everything on-brand and consistent.
