# Progress

Progress bar for loading or completion state.

## Import

```tsx
import { Progress } from "./components";
```

## Props

- `value` — Current value (0–max)
- `max` — Maximum value (default 100)
- `size` — sm | md | lg
- `showLabel` — Show percentage

## Usage

```tsx
<Progress value={75} showLabel />
<Progress value={3} max={5} size="lg" />
```
