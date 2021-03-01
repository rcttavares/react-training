import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from './DogDetails';

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack') as {},
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

describe('DogDetails', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <DogDetails />
    );

    expect(wrapper).toBeTruthy();
  });
});
