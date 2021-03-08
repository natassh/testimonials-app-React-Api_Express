import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it('should find the element in the doc', () => {
    // Act
    const { getByTestId } = render(<App />);
    const element = getByTestId("testimonial");

    // Assert
    expect(element).toBeInTheDocument();
  });
}) 
