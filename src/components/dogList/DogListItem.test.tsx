import { shallow } from 'enzyme';
import DogListItem from './DogListItem';
import DogListItemView from './DogListItemView';

describe('DogListItem', () => {
  it('should render the view with the right props', () => {
    const name = 'Name';
    const image = 'Image';
    const scolded = 0;
    const selected = false;
    const onSelectMock = jest.fn();

    const wrapper = shallow(
      <DogListItem
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelect={onSelectMock}
      />
    );

    expect(wrapper.type()).toBe(DogListItemView);
  });
});
