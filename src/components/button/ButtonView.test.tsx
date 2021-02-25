import React from 'react';
import { shallow } from 'enzyme';
import ButtonView from './ButtonView';
import CustomButton from '@material-ui/core/Button';

describe('ButtonView', () => {
  it('should render children elements correctly', () => {
    const label = 'Label';
    const onClick = jest.fn();
    const wrapper = shallow(
      <ButtonView label={label} onClick={onClick} disabled={false} />
    );

    expect(
      wrapper.matchesElement(
        <CustomButton onClick={onClick} disabled={false} type="submit" variant="contained" color="primary">
          {label}
        </CustomButton>
      )
    ).toBe(true)
  });
});
