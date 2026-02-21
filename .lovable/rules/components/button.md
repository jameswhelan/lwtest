# Button

Use the LendWell Button component for all primary actions, secondary actions, and links.

## Import

```tsx
import { Button } from "./components";
```

## Props

| Prop       | Type         | Default     | Description                          |
|------------|--------------|-------------|--------------------------------------|
| variant    | primary, secondary, outline, ghost, destructive, link | primary | Visual style                         |
| size       | sm, md, lg   | md          | Height and padding                   |
| fullWidth  | boolean      | false       | Stretch to container width           |
| isLoading  | boolean      | false       | Shows loading spinner, disables      |
| leftIcon   | ReactNode    | -           | Icon before text                     |
| rightIcon  | ReactNode    | -           | Icon after text                      |
| disabled   | boolean      | false       | Disabled state                       |

## Usage

```tsx
<Button variant="primary">Submit</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="outline" fullWidth>Full Width</Button>
<Button isLoading>Saving...</Button>
```

## Do Not

- Nest interactive elements inside a Button.
- Use inline styles for colors; use variant props.
