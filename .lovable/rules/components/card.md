# Card

Use the LendWell Card component for grouped content, dashboards, and content blocks.

## Import

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components";
```

## Composition

- `Card` — Wrapper with variant and padding
- `CardHeader` — Top section
- `CardTitle` — Heading
- `CardDescription` — Subtitle
- `CardContent` — Main body
- `CardFooter` — Actions or metadata

## Props (Card)

| Prop    | Type   | Default  | Description              |
|---------|--------|----------|--------------------------|
| variant | elevated, outlined, filled | elevated | Visual style    |
| padding | none, sm, md, lg | md      | Inner padding            |

## Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```
