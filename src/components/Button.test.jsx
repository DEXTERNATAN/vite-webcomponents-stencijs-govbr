import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrButton } from '@govbr-ds-testing/webcomponents-react';

describe('BrButton component', () => {
  it('renders button with correct type, emphasis, and text', () => {
    render(
      <BrButton type="reset" emphasis="secondary" className="mr-3">
        Cancelar
      </BrButton>
    );

    const buttonElement = screen.getByText('Cancelar');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('mr-3');
    expect(buttonElement).toHaveAttribute('type', 'reset');
    expect(buttonElement).toHaveAttribute('emphasis', 'secondary')
    
    
    // screen.debug()
  });
});
