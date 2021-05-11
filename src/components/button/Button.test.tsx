import { shallow } from 'enzyme';
import Button from './Button';
import ButtonView from './ButtonView';

describe('Button', () => {
  const label = 'Label';
  const onClickMock = jest.fn();
  const disabled = false;

  it("should render the view with the right props", () => {
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
