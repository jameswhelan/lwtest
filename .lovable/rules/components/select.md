# Select

Dropdown select for single choice.

## Import

```tsx
import { Select } from "./components";
```

## Props

- `label`, `error`, `hint` — Form labels and feedback
- `options` — Array of `{ value, label, disabled? }`
- `placeholder` — Placeholder option text
- `inputSize` — sm | md | lg

## Usage

```tsx
<Select
  label="Country"
  placeholder="Select..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
  ]}
/>
```
