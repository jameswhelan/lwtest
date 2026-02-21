# Switch

Toggle switch for boolean state.

## Import

```tsx
import { Switch } from "./components";
```

## Props

- `checked` — Controlled value
- `onChange` — (checked: boolean) => void
- `label` — Label text

## Usage

```tsx
<Switch label="Enable" checked={enabled} onChange={setEnabled} />
```
