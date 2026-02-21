# Input

Use the LendWell Input component for single-line text fields.

## Import

```tsx
import { Input } from "./components";
```

## Props

| Prop      | Type   | Default | Description                    |
|-----------|--------|---------|--------------------------------|
| label     | string | -       | Accessible label               |
| error     | string | -       | Error message (shows red state)|
| hint      | string | -       | Helper text below input        |
| leftIcon  | ReactNode | -     | Icon inside left of input      |
| rightIcon | ReactNode | -     | Icon inside right of input     |
| inputSize | sm, md, lg | md   | Input height                   |
| disabled  | boolean | false  | Disabled state                 |

All native HTML input attributes (placeholder, type, name, etc.) are supported.

## Usage

```tsx
<Input label="Email" placeholder="you@example.com" type="email" />
<Input label="Password" type="password" error="Password is required" />
<Input label="Search" hint="Enter at least 3 characters" />
```
