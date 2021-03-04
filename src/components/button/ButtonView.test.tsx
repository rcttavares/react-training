import React from 'react';
import { shallow } from 'enzyme';
import ButtonView from './ButtonView';
import CustomButton from '@material-ui/core/Button';

describe('ButtonView', () => {
  it('should render correctly', () => {
    const label = 'Label';
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <ButtonView 
        label={label}
        onClick={onClickMock}
        disabled={false}
      />
    );

    expect(
      wrapper.matchesElement(
        <CustomButton onClick={onClickMock} disabled={false} type="submit" variant="contained" color="primary">
          {label}
        </CustomButton>
      )
    ).toBe(true);
  });
});
