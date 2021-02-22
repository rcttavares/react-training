import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import CustomButton from '@material-ui/core/Button';

describe('Button', () => {
  it('should render children elements correctly', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClick} children />
    );

    expect(
      wrapper.matchesElement(
        <CustomButton onClick={onClick} variant="contained" color="primary">
        </CustomButton>
      )
    ).toBe(false)
  });
});
