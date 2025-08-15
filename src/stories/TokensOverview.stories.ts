import type { Meta, StoryObj } from '@storybook/html-vite';
import theme from '../main';
import './design-tokens.scss';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    docs: {
      description: {
        component: 'Complete overview of all design tokens in the Minds Modern Design System.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllTokens: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'design-tokens-container';
    
    const title = document.createElement('h1');
    title.textContent = 'Minds Modern Design Primitives';
    title.className = 'design-tokens-title';
    container.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Complete design token reference for the Minds Modern Design System';
    subtitle.className = 'design-tokens-subtitle';
    container.appendChild(subtitle);
    
    // Token structure visualization
    const structureSection = document.createElement('div');
    structureSection.className = 'design-tokens-section';
    
    const structureTitle = document.createElement('h2');
    structureTitle.textContent = 'Token Structure';
    structureTitle.className = 'design-tokens-section-title';
    structureSection.appendChild(structureTitle);
    
    const tokenTree = document.createElement('div');
    tokenTree.className = 'token-tree';
    
    function renderTokenTree(obj: any, container: HTMLElement, prefix = '') {
      const entries = Object.entries(obj);
      
      entries.forEach(([key, value], index) => {
        const isLastItem = index === entries.length - 1;
        const connector = isLastItem ? '└── ' : '├── ';
        const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
        
        const line = document.createElement('div');
        line.className = 'token-tree-line';
        line.textContent = prefix + connector;
        
        if (typeof value === 'object' && value !== null) {
          const keySpan = document.createElement('strong');
          keySpan.textContent = key;
          line.appendChild(keySpan);
          container.appendChild(line);
          renderTokenTree(value, container, nextPrefix);
        } else {
          const keySpan = document.createElement('span');
          keySpan.className = 'token-tree-key';
          keySpan.textContent = key;
          line.appendChild(keySpan);
          
          const separator = document.createTextNode(': ');
          line.appendChild(separator);
          
          const valueCode = document.createElement('code');
          valueCode.className = 'token-tree-value';
          valueCode.textContent = String(value);
          line.appendChild(valueCode);
          
          container.appendChild(line);
        }
      });
    }
    
    const themeRoot = document.createElement('div');
    themeRoot.className = 'token-tree-line';
    const rootTitle = document.createElement('strong');
    rootTitle.textContent = 'theme';
    themeRoot.appendChild(rootTitle);
    tokenTree.appendChild(themeRoot);
    
    renderTokenTree(theme, tokenTree);
    structureSection.appendChild(tokenTree);
    container.appendChild(structureSection);
    
    // Quick reference cards
    const quickRefSection = document.createElement('div');
    quickRefSection.className = 'design-tokens-section';
    
    const quickRefTitle = document.createElement('h2');
    quickRefTitle.textContent = 'Quick Reference';
    quickRefTitle.className = 'design-tokens-section-title';
    quickRefSection.appendChild(quickRefTitle);
    
    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'quick-ref-grid';
    
    // Colors card
    const colorsCard = document.createElement('div');
    colorsCard.className = 'quick-ref-card';
    
    const colorsCardTitle = document.createElement('h3');
    colorsCardTitle.textContent = 'Colors';
    colorsCardTitle.className = 'quick-ref-card-title';
    colorsCard.appendChild(colorsCardTitle);
    
    const colorSwatches = document.createElement('div');
    colorSwatches.className = 'quick-ref-swatches';
    
    Object.entries(theme.palette.functional).forEach(([name, color]) => {
      const swatch = document.createElement('div');
      swatch.className = `quick-ref-swatch color-swatch--${name}`;
      colorSwatches.appendChild(swatch);
    });
    
    colorsCard.appendChild(colorSwatches);
    
    const colorsInfo = document.createElement('div');
    colorsInfo.className = 'quick-ref-info';
    colorsInfo.textContent = `${Object.keys(theme.palette.functional).length} functional colors`;
    colorsCard.appendChild(colorsInfo);
    cardsGrid.appendChild(colorsCard);
    
    // Typography card
    const typographyCard = document.createElement('div');
    typographyCard.className = 'quick-ref-card';
    
    const typographyCardTitle = document.createElement('h3');
    typographyCardTitle.textContent = 'Typography';
    typographyCardTitle.className = 'quick-ref-card-title';
    typographyCard.appendChild(typographyCardTitle);
    
    const typographyInfo = document.createElement('div');
    typographyInfo.className = 'quick-ref-info';
    typographyInfo.innerHTML = `
        <div>${Object.keys(theme.typography.family).length} font families</div>
        <div>${Object.keys(theme.typography.weight).length} font weights</div>
        <div>${Object.keys(theme.typography.dimension).length} size scales</div>
    `;
    typographyCard.appendChild(typographyInfo);
    cardsGrid.appendChild(typographyCard);
    
    // Layout card
    const layoutCard = document.createElement('div');
    layoutCard.className = 'quick-ref-card';
    
    const layoutCardTitle = document.createElement('h3');
    layoutCardTitle.textContent = 'Layout';
    layoutCardTitle.className = 'quick-ref-card-title';
    layoutCard.appendChild(layoutCardTitle);
    
    const layoutInfo = document.createElement('div');
    layoutInfo.className = 'quick-ref-info';
    layoutInfo.innerHTML = `
        <div>${Object.keys(theme.size.layout.gap).length} gap values</div>
        <div>${Object.keys(theme.size.layout.thickness).length} thickness values</div>
    `;
    layoutCard.appendChild(layoutInfo);
    cardsGrid.appendChild(layoutCard);
    
    quickRefSection.appendChild(cardsGrid);
    container.appendChild(quickRefSection);
    
    // Usage examples
    const usageSection = document.createElement('div');
    usageSection.className = 'design-tokens-section';
    
    const usageTitle = document.createElement('h2');
    usageTitle.textContent = 'Usage Examples';
    usageTitle.className = 'design-tokens-section-title';
    usageSection.appendChild(usageTitle);
    
    const usageExamples = document.createElement('div');
    usageExamples.className = 'usage-examples';
    
    // JavaScript example
    const jsExample = document.createElement('div');
    jsExample.className = 'usage-example';
    
    const jsExampleTitle = document.createElement('div');
    jsExampleTitle.textContent = 'JavaScript/TypeScript';
    jsExampleTitle.className = 'usage-example-title';
    jsExample.appendChild(jsExampleTitle);
    
    const jsCode = document.createElement('pre');
    jsCode.className = 'usage-example-code';
    jsCode.textContent = `import theme from '@mindsmodern/design-primitives';

// Use colors
element.style.backgroundColor = theme.palette.functional.primary;
element.style.color = theme.palette.functional.foreground;

// Use typography
element.style.fontFamily = theme.typography.family.sans;
element.style.fontSize = theme.typography.dimension.medium.size;
element.style.fontWeight = theme.typography.weight.semibold;

// Use layout values
element.style.gap = theme.size.layout.gap.normal;
element.style.borderWidth = theme.size.layout.thickness.thick;`;
    
    jsExample.appendChild(jsCode);
    usageExamples.appendChild(jsExample);
    
    // SCSS example
    const scssExample = document.createElement('div');
    scssExample.className = 'usage-example';
    
    const scssExampleTitle = document.createElement('div');
    scssExampleTitle.textContent = 'SCSS';
    scssExampleTitle.className = 'usage-example-title';
    scssExample.appendChild(scssExampleTitle);
    
    const scssCode = document.createElement('pre');
    scssCode.className = 'usage-example-code';
    scssCode.textContent = `@import '@mindsmodern/design-primitives/styles.scss';

.button {
  background-color: $palette-functional-primary;
  color: $palette-functional-foreground;
  font-family: $typography-family-sans;
  font-size: $typography-dimension-medium-size;
  font-weight: $typography-weight-semibold;
  padding: $size-layout-gap-normal;
  border: $size-layout-thickness-thick solid $palette-functional-border;
}`;
    
    scssExample.appendChild(scssCode);
    usageExamples.appendChild(scssExample);
    
    usageSection.appendChild(usageExamples);
    container.appendChild(usageSection);
    
    return container;
  },
};