import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';
import { Dog } from '../../types/DogListType';

jest.mock('../../services/DogListService');

describe('DogList', () => {
  it('should render the view with the right props', () => {
    const dogList: Dog[] = [{ name: '', image: '', scolded: 0 }];
    const selectedDog: Dog = { name: '', image: '', scolded: 0 };
    const onSelectDogMock = jest.fn();
    // Given
    const wrapper = shallow(
      <DogList
        dogList={dogList}
        selectedDog={selectedDog}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(wrapper.type()).toBe(DogListView);
  });

  // it('should get a list of dog breeds', () => {
  //   // Given
  //   jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
  //   // When
  //   shallow(<DogList />);
  //   // Then
  //   expect(getBreeds).toBeCalled();
  // });
});
