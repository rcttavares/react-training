import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';
import { IDog } from '../../types/Types';

describe('DogList', () => {
  const dogList: IDog[] = [{ name: '', image: '', scolded: 0 }];
  const selected: IDog = { name: '', image: '', scolded: 0 };
  const onSelectMock = jest.fn();
  const dogFilter = '';

  it('should render the view with the right props', () => {
    const wrapper = shallow(
      <DogList
        dogList={dogList}
        selected={selected}
        onSelect={onSelectMock}
        dogFilter={dogFilter}
      />
    );

    expect(wrapper.type()).toBe(DogListView);
  });
});
