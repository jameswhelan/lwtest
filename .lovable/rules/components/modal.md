# Modal

Overlay dialog for focused interactions.

## Import

```tsx
import { Modal, ModalCloseButton } from "./components";
```

## Props

- `open`, `onClose` — Visibility control
- `title`, `description` — Optional header
- `children` — Body content
- `footer` — Actions (buttons)
- `size` — sm | md | lg | full
- `closeOnOverlayClick` — Default true

## Usage

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm"
  description="Are you sure?"
  footer={
    <>
      <ModalCloseButton onClose={() => setOpen(false)}>Cancel</ModalCloseButton>
      <Button onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  Content here
</Modal>
```
