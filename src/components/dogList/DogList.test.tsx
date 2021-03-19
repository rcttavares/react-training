import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';
import { getBreeds } from '../../services/DogListService';

jest.mock('../../services/DogListService');

describe('DogList', () => {
  it('should render the view with the right props', () => {
    // Given
    const wrapper = shallow(<DogList />);
    // Then
    expect(wrapper.type()).toBe(DogListView);
    expect(wrapper.props()).toMatchObject({ dogList: [] });
  });

  it('should get a list of dog breeds', () => {
    // Given
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    // When
    shallow(<DogList />);
    // Then
    expect(getBreeds).toBeCalled();
  });
});
