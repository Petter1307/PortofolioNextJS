/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';

import { Input } from '../Input';

describe('Input component', () => {
  test('should render ', () => {
    render(
      <Input
        type="text"
        name="test"
        value="testxd"
        placeholder="test-input"
        onChange={() => ''}
      />
    );
    const elem = screen.getByPlaceholderText('test-input');
    expect(elem).toHaveValue('testxd');
  });
});
