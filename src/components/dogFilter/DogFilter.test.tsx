import { shallow } from 'enzyme';
import { IDog } from '../../types/Types';
import DogFilter from './DogFilter';
import DogFilterView from './DogFilterView';

describe('DogFilter', () => {
  const dogList: IDog[] = [];
  const onSelectDogFilter = jest.fn();

  it("should render the view with the right props", () => {
    const wrapper = shallow(
      <DogFilter
        dogList={dogList}
        onSelectDogFilter={onSelectDogFilter}
      />
    );

    expect(wrapper.type()).toBe(DogFilterView);
  });
});
