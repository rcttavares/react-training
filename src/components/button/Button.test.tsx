import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import ButtonView from './ButtonView';

describe('Button', () => {
  it("should render the view with the right props", () => {
    const label = 'Label';
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Button
        label={label}
        onClick={onClickMock}
        disabled={false}
      />
    );
    expect(wrapper.type()).toBe(ButtonView);
  });
});
