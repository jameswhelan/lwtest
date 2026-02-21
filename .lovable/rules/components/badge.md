# Badge

Use the LendWell Badge component for status labels, counts, and tags.

## Import

```tsx
import { Badge } from "./components";
```

## Props

| Prop    | Type   | Default | Description                    |
|---------|--------|---------|--------------------------------|
| variant | default, primary, success, warning, error, outline | default | Color style |
| size    | sm, md, lg | md    | Badge size                     |

## Usage

```tsx
<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="outline" size="sm">Tag</Badge>
```
