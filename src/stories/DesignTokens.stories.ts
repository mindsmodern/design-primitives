import type { Meta, StoryObj } from '@storybook/html-vite';
import theme from '../main';
import './design-tokens.scss';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Design tokens for the Minds Modern Design System. These tokens define the foundational design values including colors, typography, and spacing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'design-tokens-container';
    
    const title = document.createElement('h2');
    title.textContent = 'Color Palette';
    title.className = 'design-tokens-section-title';
    container.appendChild(title);
    
    const colorGrid = document.createElement('div');
    colorGrid.className = 'color-grid';
    
    Object.entries(theme.palette.functional).forEach(([name, color]) => {
      const colorCard = document.createElement('div');
      colorCard.className = 'color-card';
      
      const colorSwatch = document.createElement('div');
      colorSwatch.className = `color-swatch color-swatch--${name}`;
      
      const colorInfo = document.createElement('div');
      colorInfo.className = 'color-info';
      
      const colorName = document.createElement('div');
      colorName.className = 'color-name';
      colorName.textContent = name;
      
      const colorValue = document.createElement('code');
      colorValue.className = 'color-value';
      colorValue.textContent = color;
      
      colorInfo.appendChild(colorName);
      colorInfo.appendChild(colorValue);
      colorCard.appendChild(colorSwatch);
      colorCard.appendChild(colorInfo);
      colorGrid.appendChild(colorCard);
    });
    
    container.appendChild(colorGrid);
    return container;
  },
};

export const Typography: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'design-tokens-container';
    
    const title = document.createElement('h2');
    title.textContent = 'Typography';
    title.className = 'design-tokens-section-title';
    container.appendChild(title);
    
    // Font Families
    const familiesSection = document.createElement('div');
    familiesSection.className = 'design-tokens-subsection';
    
    const familiesTitle = document.createElement('h3');
    familiesTitle.textContent = 'Font Families';
    familiesTitle.className = 'design-tokens-subsection-title';
    familiesSection.appendChild(familiesTitle);
    
    Object.entries(theme.typography.family).forEach(([name, family]) => {
      const familyExample = document.createElement('div');
      familyExample.className = 'typography-family-example';
      
      const familySample = document.createElement('div');
      familySample.className = `typography-family-sample typography-family-sample--${name}`;
      familySample.innerHTML = '다람쥐 헌 쳇바퀴에 타고파<br>The quick brown fox jumps over the lazy dog';
      
      const familyInfo = document.createElement('div');
      familyInfo.className = 'typography-family-info';
      
      const familyNameSpan = document.createElement('span');
      familyNameSpan.className = 'typography-family-name';
      familyNameSpan.textContent = `${name}: `;
      
      const familyValueSpan = document.createElement('code');
      familyValueSpan.className = 'typography-family-value';
      familyValueSpan.textContent = family;
      
      familyInfo.appendChild(familyNameSpan);
      familyInfo.appendChild(familyValueSpan);
      familyExample.appendChild(familySample);
      familyExample.appendChild(familyInfo);
      familiesSection.appendChild(familyExample);
    });
    
    container.appendChild(familiesSection);
    
    // Font Weights
    const weightsSection = document.createElement('div');
    weightsSection.className = 'design-tokens-subsection';
    
    const weightsTitle = document.createElement('h3');
    weightsTitle.textContent = 'Font Weights';
    weightsTitle.className = 'design-tokens-subsection-title';
    weightsSection.appendChild(weightsTitle);
    
    const weightsGrid = document.createElement('div');
    weightsGrid.className = 'typography-weights-grid';
    
    Object.entries(theme.typography.weight).forEach(([name, weight]) => {
      const weightExample = document.createElement('div');
      weightExample.className = 'typography-weight-example';
      
      const weightSample = document.createElement('div');
      weightSample.className = `typography-weight-sample typography-weight-sample--${name}`;
      weightSample.innerHTML = '다람쥐 헌 쳇바퀴에 타고파<br>The quick brown fox jumps over the lazy dog';
      
      const weightInfo = document.createElement('div');
      weightInfo.className = 'typography-weight-info';
      
      const weightNameSpan = document.createElement('span');
      weightNameSpan.className = 'typography-weight-name';
      weightNameSpan.textContent = `${name}: `;
      
      const weightValueSpan = document.createElement('span');
      weightValueSpan.textContent = weight;
      
      weightInfo.appendChild(weightNameSpan);
      weightInfo.appendChild(weightValueSpan);
      weightExample.appendChild(weightSample);
      weightExample.appendChild(weightInfo);
      weightsGrid.appendChild(weightExample);
    });
    
    weightsSection.appendChild(weightsGrid);
    container.appendChild(weightsSection);
    
    // Font Dimensions
    const dimensionsSection = document.createElement('div');
    dimensionsSection.className = 'design-tokens-subsection';
    
    const dimensionsTitle = document.createElement('h3');
    dimensionsTitle.textContent = 'Font Dimensions';
    dimensionsTitle.className = 'design-tokens-subsection-title';
    dimensionsSection.appendChild(dimensionsTitle);
    
    Object.entries(theme.typography.dimension).forEach(([name, dimension]) => {
      const dimensionExample = document.createElement('div');
      dimensionExample.className = 'typography-dimension-example';
      
      const dimensionSample = document.createElement('div');
      dimensionSample.className = `typography-dimension-sample typography-dimension-sample--${name}`;
      dimensionSample.innerHTML = `다람쥐 헌 쳇바퀴에 타고파<br>The quick brown fox jumps over the lazy dog`;
      
      const dimensionInfo = document.createElement('div');
      dimensionInfo.className = 'typography-dimension-info';
      
      const dimensionNameSpan = document.createElement('span');
      dimensionNameSpan.className = 'typography-dimension-name';
      dimensionNameSpan.textContent = `${name}: `;
      
      const dimensionValueSpan = document.createElement('span');
      dimensionValueSpan.textContent = `${dimension.size} / ${dimension.height}`;
      
      dimensionInfo.appendChild(dimensionNameSpan);
      dimensionInfo.appendChild(dimensionValueSpan);
      dimensionExample.appendChild(dimensionSample);
      dimensionExample.appendChild(dimensionInfo);
      dimensionsSection.appendChild(dimensionExample);
    });
    
    container.appendChild(dimensionsSection);
    return container;
  },
};

export const Spacing: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'design-tokens-container';
    
    const title = document.createElement('h2');
    title.textContent = 'Spacing & Layout';
    title.className = 'design-tokens-section-title';
    container.appendChild(title);
    
    // Gap values
    const gapSection = document.createElement('div');
    gapSection.className = 'design-tokens-subsection';
    
    const gapTitle = document.createElement('h3');
    gapTitle.textContent = 'Gap Values';
    gapTitle.className = 'design-tokens-subsection-title';
    gapSection.appendChild(gapTitle);
    
    Object.entries(theme.size.layout.gap).forEach(([name, value]) => {
      const gapExample = document.createElement('div');
      gapExample.className = 'spacing-example';
      
      const gapVisualization = document.createElement('div');
      gapVisualization.className = `spacing-visualization spacing-visualization--${name}`;
      
      for (let i = 0; i < 3; i++) {
        const box = document.createElement('div');
        box.className = 'spacing-box';
        gapVisualization.appendChild(box);
      }
      
      const gapInfo = document.createElement('div');
      gapInfo.className = 'spacing-info';
      
      const gapNameSpan = document.createElement('span');
      gapNameSpan.className = 'spacing-name';
      gapNameSpan.textContent = `${name}: `;
      
      const gapValueSpan = document.createElement('span');
      gapValueSpan.textContent = value;
      
      gapInfo.appendChild(gapNameSpan);
      gapInfo.appendChild(gapValueSpan);
      gapExample.appendChild(gapVisualization);
      gapExample.appendChild(gapInfo);
      gapSection.appendChild(gapExample);
    });
    
    container.appendChild(gapSection);
    
    // Thickness values
    const thicknessSection = document.createElement('div');
    thicknessSection.className = 'design-tokens-subsection';
    
    const thicknessTitle = document.createElement('h3');
    thicknessTitle.textContent = 'Border Thickness';
    thicknessTitle.className = 'design-tokens-subsection-title';
    thicknessSection.appendChild(thicknessTitle);
    
    Object.entries(theme.size.layout.thickness).forEach(([name, value]) => {
      const thicknessExample = document.createElement('div');
      thicknessExample.className = 'thickness-example';
      
      const thicknessVisualization = document.createElement('div');
      thicknessVisualization.className = `thickness-visualization thickness-visualization--${name}`;
      
      const thicknessInfo = document.createElement('div');
      thicknessInfo.className = 'thickness-info';
      
      const thicknessNameSpan = document.createElement('span');
      thicknessNameSpan.className = 'thickness-name';
      thicknessNameSpan.textContent = `${name}: `;
      
      const thicknessValueSpan = document.createElement('span');
      thicknessValueSpan.textContent = value;
      
      thicknessInfo.appendChild(thicknessNameSpan);
      thicknessInfo.appendChild(thicknessValueSpan);
      thicknessExample.appendChild(thicknessVisualization);
      thicknessExample.appendChild(thicknessInfo);
      thicknessSection.appendChild(thicknessExample);
    });
    
    container.appendChild(thicknessSection);
    return container;
  },
};