import { render, screen } from '@testing-library/react';
import CommentItem from './CommentItem';

describe('App', () => {

  it('should find the element in the doc', () => {
    // Act

    // render(<CommentItem />);
    // const element = screen.getByRole("testimonial")

    // const {getByRole} = render(<CommentItem />);
    // const element = getByRole("testimonial")

    const {getAllByLabelText} = render(<CommentItem />);
    const element = getAllByLabelText("testimonial")

    // Assert
    expect(element).toBeInTheDocument();

  });
  it('should return an array with 10 testimonials', () => {
    // Act
    const {getAllByLabelText} = render(<CommentItem />);
    const elements = getAllByLabelText("testimonial")

    // Assert
    expect(elements.length).toBe(10)

  });
}) 



