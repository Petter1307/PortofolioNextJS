import { render, screen } from '@testing-library/react';

import { ProjectCard } from '../ProjectCard';

describe('ProjectCard Component', () => {
  test('should render and have test as text content ', () => {
    render(<ProjectCard title="test" link=" " body=" " />);
    const element = screen.getByTestId('project-card-header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('test');
  });
});
