# Alert

Inline banner for feedback and notifications.

## Import

```tsx
import { Alert } from "./components";
```

## Props

- `variant` — info | success | warning | error | neutral
- `title` — Optional heading
- `onDismiss` — Optional close handler (shows X button)

## Usage

```tsx
<Alert variant="success" title="Saved">Changes saved.</Alert>
<Alert variant="error" onDismiss={() => {}}>Something went wrong.</Alert>
```
