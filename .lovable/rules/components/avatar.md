# Avatar

User avatar with image or initials fallback.

## Import

```tsx
import { Avatar } from "./components";
```

## Props

- `src` — Image URL
- `alt` — Image alt text
- `fallback` — Name for initials, or "?" if none
- `size` — sm | md | lg

## Usage

```tsx
<Avatar src={user.avatar} alt={user.name} fallback={user.name} />
<Avatar fallback="JD" size="sm" />
```
