import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import ButtonView from './ButtonView';

describe('Button', () => {
  it("should render the view with the right props", () => {
    const label = 'Label';
    const onClickMock = jest.fn();
    const disabled = false;
    const wrapper = shallow(
      <Button
        label={label}
        onClick={onClickMock}
        disabled={disabled}
      />
    );
    expect(wrapper.type()).toBe(ButtonView);
  });
});
