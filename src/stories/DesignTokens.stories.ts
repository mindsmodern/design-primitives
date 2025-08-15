import type { Meta, StoryObj } from '@storybook/html';
import theme from '../main';

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
    container.style.fontFamily = 'system-ui, sans-serif';
    container.style.padding = '20px';
    
    const title = document.createElement('h2');
    title.textContent = 'Color Palette';
    title.style.marginBottom = '20px';
    container.appendChild(title);
    
    const colorGrid = document.createElement('div');
    colorGrid.style.display = 'grid';
    colorGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    colorGrid.style.gap = '16px';
    
    Object.entries(theme.palette.functional).forEach(([name, color]) => {
      const colorCard = document.createElement('div');
      colorCard.style.border = '1px solid #e0e0e0';
      colorCard.style.borderRadius = '8px';
      colorCard.style.overflow = 'hidden';
      
      const colorSwatch = document.createElement('div');
      colorSwatch.style.backgroundColor = color;
      colorSwatch.style.height = '80px';
      colorSwatch.style.width = '100%';
      
      const colorInfo = document.createElement('div');
      colorInfo.style.padding = '12px';
      colorInfo.innerHTML = `
        <strong style="text-transform: capitalize; font-size: 14px;">${name}</strong><br>
        <code style="font-size: 12px; color: #666;">${color}</code>
      `;
      
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
    container.style.fontFamily = 'system-ui, sans-serif';
    container.style.padding = '20px';
    
    const title = document.createElement('h2');
    title.textContent = 'Typography';
    title.style.marginBottom = '20px';
    container.appendChild(title);
    
    // Font Families
    const familiesSection = document.createElement('div');
    familiesSection.style.marginBottom = '32px';
    
    const familiesTitle = document.createElement('h3');
    familiesTitle.textContent = 'Font Families';
    familiesTitle.style.marginBottom = '16px';
    familiesSection.appendChild(familiesTitle);
    
    Object.entries(theme.typography.family).forEach(([name, family]) => {
      const familyExample = document.createElement('div');
      familyExample.style.marginBottom = '12px';
      familyExample.style.padding = '12px';
      familyExample.style.border = '1px solid #e0e0e0';
      familyExample.style.borderRadius = '4px';
      familyExample.innerHTML = `
        <div style="font-family: ${family}; font-size: 16px; margin-bottom: 4px;">
          The quick brown fox jumps over the lazy dog
        </div>
        <div style="font-size: 12px; color: #666;">
          <strong>${name}:</strong> <code>${family}</code>
        </div>
      `;
      familiesSection.appendChild(familyExample);
    });
    
    container.appendChild(familiesSection);
    
    // Font Weights
    const weightsSection = document.createElement('div');
    weightsSection.style.marginBottom = '32px';
    
    const weightsTitle = document.createElement('h3');
    weightsTitle.textContent = 'Font Weights';
    weightsTitle.style.marginBottom = '16px';
    weightsSection.appendChild(weightsTitle);
    
    const weightsGrid = document.createElement('div');
    weightsGrid.style.display = 'grid';
    weightsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    weightsGrid.style.gap = '12px';
    
    Object.entries(theme.typography.weight).forEach(([name, weight]) => {
      const weightExample = document.createElement('div');
      weightExample.style.padding = '12px';
      weightExample.style.border = '1px solid #e0e0e0';
      weightExample.style.borderRadius = '4px';
      weightExample.innerHTML = `
        <div style="font-weight: ${weight}; margin-bottom: 4px;">Sample Text</div>
        <div style="font-size: 12px; color: #666;">
          <strong>${name}:</strong> ${weight}
        </div>
      `;
      weightsGrid.appendChild(weightExample);
    });
    
    weightsSection.appendChild(weightsGrid);
    container.appendChild(weightsSection);
    
    // Font Dimensions
    const dimensionsSection = document.createElement('div');
    
    const dimensionsTitle = document.createElement('h3');
    dimensionsTitle.textContent = 'Font Dimensions';
    dimensionsTitle.style.marginBottom = '16px';
    dimensionsSection.appendChild(dimensionsTitle);
    
    Object.entries(theme.typography.dimension).forEach(([name, dimension]) => {
      const dimensionExample = document.createElement('div');
      dimensionExample.style.marginBottom = '16px';
      dimensionExample.style.padding = '12px';
      dimensionExample.style.border = '1px solid #e0e0e0';
      dimensionExample.style.borderRadius = '4px';
      dimensionExample.innerHTML = `
        <div style="font-size: ${dimension.size}; line-height: ${dimension.height}; margin-bottom: 8px;">
          Sample text at ${name} size
        </div>
        <div style="font-size: 12px; color: #666;">
          <strong>${name}:</strong> ${dimension.size} / ${dimension.height}
        </div>
      `;
      dimensionsSection.appendChild(dimensionExample);
    });
    
    container.appendChild(dimensionsSection);
    return container;
  },
};

export const Spacing: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.fontFamily = 'system-ui, sans-serif';
    container.style.padding = '20px';
    
    const title = document.createElement('h2');
    title.textContent = 'Spacing & Layout';
    title.style.marginBottom = '20px';
    container.appendChild(title);
    
    // Gap values
    const gapSection = document.createElement('div');
    gapSection.style.marginBottom = '32px';
    
    const gapTitle = document.createElement('h3');
    gapTitle.textContent = 'Gap Values';
    gapTitle.style.marginBottom = '16px';
    gapSection.appendChild(gapTitle);
    
    Object.entries(theme.size.layout.gap).forEach(([name, value]) => {
      const gapExample = document.createElement('div');
      gapExample.style.marginBottom = '16px';
      gapExample.style.padding = '12px';
      gapExample.style.border = '1px solid #e0e0e0';
      gapExample.style.borderRadius = '4px';
      
      const gapVisualization = document.createElement('div');
      gapVisualization.style.display = 'flex';
      gapVisualization.style.gap = value;
      gapVisualization.style.marginBottom = '8px';
      
      for (let i = 0; i < 3; i++) {
        const box = document.createElement('div');
        box.style.width = '40px';
        box.style.height = '40px';
        box.style.backgroundColor = theme.palette.functional.primary;
        box.style.borderRadius = '4px';
        gapVisualization.appendChild(box);
      }
      
      const gapInfo = document.createElement('div');
      gapInfo.style.fontSize = '12px';
      gapInfo.style.color = '#666';
      gapInfo.innerHTML = `<strong>${name}:</strong> ${value}`;
      
      gapExample.appendChild(gapVisualization);
      gapExample.appendChild(gapInfo);
      gapSection.appendChild(gapExample);
    });
    
    container.appendChild(gapSection);
    
    // Thickness values
    const thicknessSection = document.createElement('div');
    
    const thicknessTitle = document.createElement('h3');
    thicknessTitle.textContent = 'Border Thickness';
    thicknessTitle.style.marginBottom = '16px';
    thicknessSection.appendChild(thicknessTitle);
    
    Object.entries(theme.size.layout.thickness).forEach(([name, value]) => {
      const thicknessExample = document.createElement('div');
      thicknessExample.style.marginBottom = '16px';
      thicknessExample.style.padding = '12px';
      thicknessExample.style.border = '1px solid #e0e0e0';
      thicknessExample.style.borderRadius = '4px';
      
      const thicknessVisualization = document.createElement('div');
      thicknessVisualization.style.width = '100%';
      thicknessVisualization.style.height = '40px';
      thicknessVisualization.style.border = `${value} solid ${theme.palette.functional.primary}`;
      thicknessVisualization.style.marginBottom = '8px';
      thicknessVisualization.style.borderRadius = '4px';
      
      const thicknessInfo = document.createElement('div');
      thicknessInfo.style.fontSize = '12px';
      thicknessInfo.style.color = '#666';
      thicknessInfo.innerHTML = `<strong>${name}:</strong> ${value}`;
      
      thicknessExample.appendChild(thicknessVisualization);
      thicknessExample.appendChild(thicknessInfo);
      thicknessSection.appendChild(thicknessExample);
    });
    
    container.appendChild(thicknessSection);
    return container;
  },
};