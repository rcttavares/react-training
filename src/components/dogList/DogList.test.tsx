import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';
import { getDogList } from '../../services/DogListService';

jest.mock('../../services/DogListService');

describe('DogList', () => {
  it('should render with the right props', () => {
    const wrapper = shallow(<DogList />);
    expect(wrapper.matchesElement(<DogListView dogList={[]} />)).toBe(true);
  });

  it('should call function to API', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    shallow(<DogList />);
    expect(getDogList).toHaveBeenCalledTimes(1);
  });
});
