# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `pnpm run build` - Compiles TypeScript, builds with Vite, and generates SCSS variables
- **Storybook**: `pnpm run storybook` - Starts Storybook dev server on port 6006
- **Build Storybook**: `pnpm run build-storybook` - Builds static Storybook for deployment
- **Package Manager**: Uses `pnpm` (specified version 9.15.1)

Note: No test suite is currently configured (`npm test` exits with error).

## Architecture Overview

This is a design system that combines design primitives (design tokens) with a component library built using Zag.js state machines. The library exports both design tokens for the Minds Modern Design System and accessible, interactive UI components.

### Core Structure

- **Design Tokens**: `src/main.ts` - Exports theme object with design tokens
- **Components**: `src/components/` - UI components built with Zag.js state machines
- **Build Pipeline**: 
  1. TypeScript compilation generates type definitions in `dist/`
  2. Vite builds the library as both ESM and UMD formats
  3. Custom script (`scripts/build-scss.js`) converts the theme object to SCSS variables
  4. Components are bundled with their Zag.js dependencies

### Theme Structure

The theme object is organized into three main categories:
- `palette.functional` - Color tokens (primary, secondary, tertiary, background, border, foreground)
- `size.layout` - Spacing and thickness values (gap, thickness)
- `typography` - Font specifications (weight, family, dimension with size/height pairs)

### Export Strategy

The library provides multiple consumption methods:
- **Design Tokens (JS/TS)**: Import the theme object directly from the main export
- **Design Tokens (SCSS)**: Import generated SCSS variables from `./styles.scss` export
- **UI Components**: Import individual components with built-in accessibility and interaction logic

The build process automatically generates SCSS variables by traversing the theme object and converting nested properties to kebab-case variable names (e.g., `theme.palette.functional.primary` becomes `$palette-functional-primary`).

### Storybook Integration

Storybook is configured to showcase both design tokens and UI components:
- Stories use SCSS classes that reference the generated design token variables
- Component stories demonstrate Zag.js-powered interactions and accessibility features
- SCSS variables are automatically imported via Vite configuration
- Typography includes fallback font stacks for better cross-platform compatibility
- All visual components demonstrate real usage of the design tokens

### Package Configuration

- Exports both CommonJS (`dist/main.umd.cjs`) and ESM (`dist/main.js`) formats
- Provides TypeScript definitions (`dist/main.d.ts`)
- SCSS variables available as separate export (`./styles.scss`)
- Individual components exported with full TypeScript support
- Tree-shakable exports for both design tokens and components
- Zag.js dependencies bundled for optimal tree-shaking

## Zag.js Integration

### Component Development with Zag.js

This library uses Zag.js state machines for building accessible, interactive UI components:

- **Framework Agnostic**: Components work across React, Vue, Solid, and Svelte
- **Accessibility First**: Built-in keyboard navigation, focus management, and ARIA attributes
- **State Machine Powered**: Complex interactions handled by finite state machines
- **Headless Design**: Complete control over styling using our design tokens

### Installation for Components

```bash
# Install framework adapter (React example)
pnpm add @zag-js/react

# Install specific component machines as needed
pnpm add @zag-js/tooltip @zag-js/dialog @zag-js/menu
```

### Component Structure

Each component follows this pattern:
```
src/components/{ComponentName}/
├── index.ts                 # Main export
├── {ComponentName}.tsx      # React implementation with Zag.js
├── {ComponentName}.scss     # Styling with design tokens
└── {ComponentName}.stories.ts # Storybook documentation
```

### Usage Pattern

```typescript
import * as tooltip from "@zag-js/tooltip"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

export function Tooltip({ children, content }) {
  const service = useMachine(tooltip.machine, { id: useId() })
  const api = tooltip.connect(service, normalizeProps)
  
  return (
    <div>
      <button {...api.getTriggerProps()}>{children}</button>
      {api.open && (
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>{content}</div>
        </div>
      )}
    </div>
  )
}
```

For detailed implementation guidance, see `ZAG_GUIDE.md`.