import type { Meta, StoryObj } from '@storybook/html';
import theme from '../main';

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
    container.style.fontFamily = 'system-ui, sans-serif';
    container.style.padding = '20px';
    container.style.maxWidth = '1200px';
    
    const title = document.createElement('h1');
    title.textContent = 'Minds Modern Design Primitives';
    title.style.marginBottom = '8px';
    title.style.color = theme.palette.functional.primary;
    container.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Complete design token reference for the Minds Modern Design System';
    subtitle.style.marginBottom = '32px';
    subtitle.style.color = '#666';
    subtitle.style.fontSize = '16px';
    container.appendChild(subtitle);
    
    // Token structure visualization
    const structureSection = document.createElement('div');
    structureSection.style.marginBottom = '40px';
    
    const structureTitle = document.createElement('h2');
    structureTitle.textContent = 'Token Structure';
    structureTitle.style.marginBottom = '16px';
    structureSection.appendChild(structureTitle);
    
    const tokenTree = document.createElement('div');
    tokenTree.style.fontFamily = 'monospace';
    tokenTree.style.fontSize = '14px';
    tokenTree.style.backgroundColor = '#f8f9fa';
    tokenTree.style.padding = '16px';
    tokenTree.style.borderRadius = '8px';
    tokenTree.style.border = '1px solid #e9ecef';
    tokenTree.style.whiteSpace = 'pre';
    tokenTree.style.lineHeight = '1.4';
    
    function renderTokenTree(obj: any, container: HTMLElement, prefix = '') {
      const entries = Object.entries(obj);
      
      entries.forEach(([key, value], index) => {
        const isLastItem = index === entries.length - 1;
        const connector = isLastItem ? '└── ' : '├── ';
        const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
        
        const line = document.createElement('div');
        line.style.margin = '0';
        line.style.padding = '0';
        line.textContent = prefix + connector;
        
        if (typeof value === 'object' && value !== null) {
          const keySpan = document.createElement('strong');
          keySpan.textContent = key;
          line.appendChild(keySpan);
          container.appendChild(line);
          renderTokenTree(value, container, nextPrefix);
        } else {
          const keySpan = document.createElement('span');
          keySpan.style.color = theme.palette.functional.primary;
          keySpan.textContent = key;
          line.appendChild(keySpan);
          
          const separator = document.createTextNode(': ');
          line.appendChild(separator);
          
          const valueCode = document.createElement('code');
          valueCode.textContent = String(value);
          valueCode.style.backgroundColor = '#e9ecef';
          valueCode.style.padding = '2px 4px';
          valueCode.style.borderRadius = '3px';
          line.appendChild(valueCode);
          
          container.appendChild(line);
        }
      });
    }
    
    const themeRoot = document.createElement('div');
    themeRoot.style.margin = '0';
    themeRoot.style.padding = '0';
    const rootTitle = document.createElement('strong');
    rootTitle.textContent = 'theme';
    themeRoot.appendChild(rootTitle);
    tokenTree.appendChild(themeRoot);
    
    renderTokenTree(theme, tokenTree);
    structureSection.appendChild(tokenTree);
    container.appendChild(structureSection);
    
    // Quick reference cards
    const quickRefSection = document.createElement('div');
    quickRefSection.style.marginBottom = '40px';
    
    const quickRefTitle = document.createElement('h2');
    quickRefTitle.textContent = 'Quick Reference';
    quickRefTitle.style.marginBottom = '16px';
    quickRefSection.appendChild(quickRefTitle);
    
    const cardsGrid = document.createElement('div');
    cardsGrid.style.display = 'grid';
    cardsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    cardsGrid.style.gap = '20px';
    
    // Colors card
    const colorsCard = document.createElement('div');
    colorsCard.style.border = '1px solid #e0e0e0';
    colorsCard.style.borderRadius = '12px';
    colorsCard.style.padding = '20px';
    colorsCard.style.backgroundColor = '#fff';
    
    const colorsCardTitle = document.createElement('h3');
    colorsCardTitle.textContent = 'Colors';
    colorsCardTitle.style.marginBottom = '12px';
    colorsCardTitle.style.color = theme.palette.functional.primary;
    colorsCard.appendChild(colorsCardTitle);
    
    const colorSwatches = document.createElement('div');
    colorSwatches.style.display = 'flex';
    colorSwatches.style.gap = '4px';
    colorSwatches.style.marginBottom = '8px';
    
    Object.values(theme.palette.functional).forEach(color => {
      const swatch = document.createElement('div');
      swatch.style.width = '20px';
      swatch.style.height = '20px';
      swatch.style.backgroundColor = color;
      swatch.style.borderRadius = '4px';
      swatch.style.border = '1px solid #e0e0e0';
      colorSwatches.appendChild(swatch);
    });
    
    colorsCard.appendChild(colorSwatches);
    colorsCard.innerHTML += `<div style="font-size: 12px; color: #666;">${Object.keys(theme.palette.functional).length} functional colors</div>`;
    cardsGrid.appendChild(colorsCard);
    
    // Typography card
    const typographyCard = document.createElement('div');
    typographyCard.style.border = '1px solid #e0e0e0';
    typographyCard.style.borderRadius = '12px';
    typographyCard.style.padding = '20px';
    typographyCard.style.backgroundColor = '#fff';
    
    const typographyCardTitle = document.createElement('h3');
    typographyCardTitle.textContent = 'Typography';
    typographyCardTitle.style.marginBottom = '12px';
    typographyCardTitle.style.color = theme.palette.functional.primary;
    typographyCard.appendChild(typographyCardTitle);
    
    typographyCard.innerHTML += `
      <div style="font-size: 12px; color: #666; line-height: 1.5;">
        <div>${Object.keys(theme.typography.family).length} font families</div>
        <div>${Object.keys(theme.typography.weight).length} font weights</div>
        <div>${Object.keys(theme.typography.dimension).length} size scales</div>
      </div>
    `;
    cardsGrid.appendChild(typographyCard);
    
    // Layout card
    const layoutCard = document.createElement('div');
    layoutCard.style.border = '1px solid #e0e0e0';
    layoutCard.style.borderRadius = '12px';
    layoutCard.style.padding = '20px';
    layoutCard.style.backgroundColor = '#fff';
    
    const layoutCardTitle = document.createElement('h3');
    layoutCardTitle.textContent = 'Layout';
    layoutCardTitle.style.marginBottom = '12px';
    layoutCardTitle.style.color = theme.palette.functional.primary;
    layoutCard.appendChild(layoutCardTitle);
    
    layoutCard.innerHTML += `
      <div style="font-size: 12px; color: #666; line-height: 1.5;">
        <div>${Object.keys(theme.size.layout.gap).length} gap values</div>
        <div>${Object.keys(theme.size.layout.thickness).length} thickness values</div>
      </div>
    `;
    cardsGrid.appendChild(layoutCard);
    
    quickRefSection.appendChild(cardsGrid);
    container.appendChild(quickRefSection);
    
    // Usage examples
    const usageSection = document.createElement('div');
    
    const usageTitle = document.createElement('h2');
    usageTitle.textContent = 'Usage Examples';
    usageTitle.style.marginBottom = '16px';
    usageSection.appendChild(usageTitle);
    
    const usageExamples = document.createElement('div');
    usageExamples.style.display = 'grid';
    usageExamples.style.gap = '16px';
    
    // JavaScript example
    const jsExample = document.createElement('div');
    jsExample.style.border = '1px solid #e0e0e0';
    jsExample.style.borderRadius = '8px';
    jsExample.style.overflow = 'hidden';
    
    const jsExampleTitle = document.createElement('div');
    jsExampleTitle.textContent = 'JavaScript/TypeScript';
    jsExampleTitle.style.padding = '12px 16px';
    jsExampleTitle.style.backgroundColor = '#f8f9fa';
    jsExampleTitle.style.fontWeight = '600';
    jsExampleTitle.style.fontSize = '14px';
    jsExample.appendChild(jsExampleTitle);
    
    const jsCode = document.createElement('pre');
    jsCode.style.margin = '0';
    jsCode.style.padding = '16px';
    jsCode.style.backgroundColor = '#ffffff';
    jsCode.style.fontSize = '12px';
    jsCode.style.overflow = 'auto';
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
    scssExample.style.border = '1px solid #e0e0e0';
    scssExample.style.borderRadius = '8px';
    scssExample.style.overflow = 'hidden';
    
    const scssExampleTitle = document.createElement('div');
    scssExampleTitle.textContent = 'SCSS';
    scssExampleTitle.style.padding = '12px 16px';
    scssExampleTitle.style.backgroundColor = '#f8f9fa';
    scssExampleTitle.style.fontWeight = '600';
    scssExampleTitle.style.fontSize = '14px';
    scssExample.appendChild(scssExampleTitle);
    
    const scssCode = document.createElement('pre');
    scssCode.style.margin = '0';
    scssCode.style.padding = '16px';
    scssCode.style.backgroundColor = '#ffffff';
    scssCode.style.fontSize = '12px';
    scssCode.style.overflow = 'auto';
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