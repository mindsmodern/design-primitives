# Zag.js Implementation Guide

This document serves as a reference for implementing UI components using Zag.js state machines in our design system.

## Overview

Zag.js is a framework-agnostic toolkit for building accessible, interactive UI components using finite state machines. It provides a "write once, use everywhere" approach that works across React, Vue, Solid, and Svelte.

### Core Principles

1. **State Machine Powered**: Built on modern Statecharts concepts
2. **Framework Agnostic**: Universal component logic that works across frameworks
3. **Accessibility First**: Handles keyboard interactions, focus management, and ARIA attributes
4. **Headless & Unstyled**: Complete control over styling while maintaining functionality
5. **Incremental Adoption**: Can be introduced gradually into existing projects

## Architecture Pattern

All Zag.js components follow a consistent three-step pattern:

1. **Install the machine**: `npm install @zag-js/{component}`
2. **Consume the machine**: Import and initialize the state machine
3. **Connect to UI**: Use framework adapters to connect machine state to UI

## Installation

### Core Dependencies
```bash
# Install framework adapter (choose one)
npm install @zag-js/react     # For React
npm install @zag-js/vue       # For Vue 3
npm install @zag-js/solid     # For Solid.js
npm install @zag-js/svelte    # For Svelte
```

### Component Machines
```bash
# Install individual component machines as needed
npm install @zag-js/tooltip
npm install @zag-js/dialog
npm install @zag-js/menu
npm install @zag-js/accordion
# ... etc
```

## Usage Patterns

### React Implementation
```javascript
import * as tooltip from "@zag-js/tooltip"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

export function Tooltip({ children, content }) {
  const service = useMachine(tooltip.machine, { 
    id: useId(),
    // Additional configuration options
  })
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

### Vue Implementation
```javascript
import * as tooltip from "@zag-js/tooltip"
import { computed } from "vue"
import { normalizeProps, useMachine } from "@zag-js/vue"

export default {
  setup() {
    const service = useMachine(tooltip.machine, { id: "tooltip-1" })
    const api = computed(() => tooltip.connect(service.value, normalizeProps))
    
    return { api }
  }
}
```

## Available Components

Based on research, Zag.js provides state machines for common UI components including:

- **Accordion** - Expandable content sections
- **Dialog/Modal** - Overlay components
- **Menu** - Dropdown and context menus  
- **Number Input** - Numeric input with increment/decrement
- **Toggle Group** - Group of toggle buttons
- **Tooltip** - Hover/focus information overlays
- **Steps** - Multi-step workflows
- *...and more (refer to official docs for complete list)*

## Integration with Design System

### Styling Strategy
Since Zag.js components are headless, they integrate perfectly with our existing design tokens:

```scss
// Use our design tokens for styling
.tooltip-content {
  background-color: $palette-functional-background;
  color: $palette-functional-foreground;
  border: $thickness-border solid $palette-functional-border;
  border-radius: $size-layout-gap-small;
  padding: $size-layout-gap-medium;
  
  // Typography
  font-family: $typography-family-body;
  font-size: $typography-dimension-body-size;
  line-height: $typography-dimension-body-height;
}
```

### Component Structure
Each component should:
1. Use Zag.js for interaction logic and accessibility
2. Apply our design tokens for visual styling
3. Provide TypeScript definitions
4. Include Storybook stories for documentation
5. Export as individual modules to support tree-shaking

## Development Workflow

### 1. Component Creation
```bash
# Install the required machine
npm install @zag-js/{component-name}

# Create component files
src/components/{ComponentName}/
├── index.ts                 # Main export
├── {ComponentName}.tsx      # React implementation
├── {ComponentName}.scss     # Styling with design tokens
└── {ComponentName}.stories.ts # Storybook documentation
```

### 2. Implementation Checklist
- [ ] Install Zag.js machine
- [ ] Implement React component using machine
- [ ] Apply design tokens for styling
- [ ] Add TypeScript definitions
- [ ] Create Storybook stories
- [ ] Test accessibility features
- [ ] Document component API

### 3. Testing Strategy
- Interaction logic is handled by Zag.js (pre-tested)
- Focus on integration testing with our design tokens
- Verify accessibility attributes and keyboard navigation
- Test across different browsers and devices

## Best Practices

1. **State Management**: Let Zag.js handle complex interaction states
2. **Styling**: Use our SCSS variables for consistent theming
3. **Accessibility**: Trust Zag.js for ARIA attributes and keyboard handling
4. **Performance**: Leverage Zag.js optimizations for state updates
5. **Tree-shaking**: Export components individually to enable tree-shaking
6. **Documentation**: Document component-specific configurations in Storybook
