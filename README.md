# LendWell Design System

Pixel-perfect React component library for [Lovable](https://lovable.dev/) and [Zero Height](https://zeroheight.com/). Aligned with the LendWell Figma file (same file key `WXFH6NEl569UGViyMq7vZr`):

- **[Design System](https://www.figma.com/design/WXFH6NEl569UGViyMq7vZr/Design-System)** — canonical source
- [LendWell Design System](https://www.figma.com/design/WXFH6NEl569UGViyMq7vZr/LendWell-Design-System)
- [Design System 2.0](https://www.figma.com/design/WXFH6NEl569UGViyMq7vZr/Design-System-2.0)

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** with design tokens
- **Vite**

## Components

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, outline, ghost, destructive, link. Sizes: sm, md, lg. Loading state. |
| **Input** | Text input with label, error, hint, icons, sizes |
| **Textarea** | Multi-line input |
| **Select** | Dropdown select |
| **Checkbox** | Single checkbox with label |
| **Radio / RadioGroup** | Radio buttons |
| **Switch** | Toggle switch |
| **Card** | Elevated, outlined, filled. CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| **Badge** | Status labels and tags |
| **Typography** | H1–H4, body, caption, label variants |
| **Modal** | Overlay dialog |
| **Alert** | Info, success, warning, error banners |
| **Tabs** | Tabbed navigation (underline, pills) |
| **Avatar** | User avatar with image or initials |
| **Spinner** | Loading indicator |
| **Tooltip** | Hover tooltip |
| **Progress** | Progress bar |
| **Separator** | Horizontal/vertical divider |
| **Link** | Styled anchor |
| **Skeleton** | Loading placeholder |
| **Label** | Form label |

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 for the component showcase.

## For Lovable

1. Create a design system project in Lovable
2. Add this repo (or deploy and link)
3. The `.lovable` folder provides rules Lovable uses during generation
4. Connect this design system in Project Settings → Design Systems
5. Lovable will use these components for pixel-perfect prototypes

## For Zero Height

1. Connect Figma and this repo in Zero Height
2. Map Figma components to these React implementations
3. Use design tokens for documentation sync

## Syncing from Figma

1. Open the [LendWell file](https://www.figma.com/design/WXFH6NEl569UGViyMq7vZr/) (Design System or Design System 2.0) in Figma desktop
2. Enable Dev Mode → MCP server
3. Run `get_variable_defs` and `get_design_context` for specs
4. Update `src/tokens/tokens.css` with exact values

## Structure

```
src/
├── components/
├── tokens/
├── lib/
└── App.tsx (showcase)
```
