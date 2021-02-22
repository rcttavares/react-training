import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Button from './components/Button/Button';

test('should render elements correctly', () => {
  const wrapper = shallow(
    <App />
  );

  expect(
    wrapper.matchesElement(
      <Button onClick={() => alert('Clicked!')}>
        Click here!
      </Button>
    )
  ).toBe(false)
});
