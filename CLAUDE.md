# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `pnpm run build` - Compiles TypeScript, builds with Vite, and generates SCSS variables
- **Storybook**: `pnpm run storybook` - Starts Storybook dev server on port 6006
- **Build Storybook**: `pnpm run build-storybook` - Builds static Storybook for deployment
- **Package Manager**: Uses `pnpm` (specified version 9.15.1)

Note: No test suite is currently configured (`npm test` exits with error).

## Architecture Overview

This is a design system primitives library that exports a theme object containing design tokens for the Minds Modern Design System.

### Core Structure

- **Main Export**: `src/main.ts` - Exports a single theme object with design tokens
- **Build Pipeline**: 
  1. TypeScript compilation generates type definitions in `dist/`
  2. Vite builds the library as both ESM and UMD formats
  3. Custom script (`scripts/build-scss.js`) converts the theme object to SCSS variables

### Theme Structure

The theme object is organized into three main categories:
- `palette.functional` - Color tokens (primary, secondary, tertiary, background, border, foreground)
- `size.layout` - Spacing and thickness values (gap, thickness)
- `typography` - Font specifications (weight, family, dimension with size/height pairs)

### Export Strategy

The library provides dual consumption methods:
- **JavaScript/TypeScript**: Import the theme object directly from the main export
- **SCSS**: Import generated SCSS variables from `./styles.scss` export

The build process automatically generates SCSS variables by traversing the theme object and converting nested properties to kebab-case variable names (e.g., `theme.palette.functional.primary` becomes `$palette-functional-primary`).

### Storybook Integration

Storybook is configured to showcase the design tokens with SCSS integration:
- Stories use SCSS classes that reference the generated design token variables
- SCSS variables are automatically imported via Vite configuration
- Typography includes fallback font stacks for better cross-platform compatibility
- All visual components demonstrate real usage of the design tokens

### Package Configuration

- Exports both CommonJS (`dist/main.umd.cjs`) and ESM (`dist/main.js`) formats
- Provides TypeScript definitions (`dist/main.d.ts`)
- SCSS variables available as separate export (`./styles.scss`)