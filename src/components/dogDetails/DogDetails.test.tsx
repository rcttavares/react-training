import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

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
  it("should render the view with the right props", () => {
    const name = 'Name';
    const image = 'Image';
    const onScoldMock = jest.fn();
    const wrapper = shallow(
      <DogDetails
        name={name}
        image={image}
        onScold={onScoldMock}
        disabled={false}
      />
    );
    expect(wrapper.type()).toBe(DogDetailsView);
  });

  // it("should handle the onScold event", () => {
  //   const wrapper = shallow(<DogDetails />);
  //   wrapper.invoke("onScold")();
  //   expect(wrapper.children().text()).toEqual('Scold: 1');
  // });

  it("should handle the onBark event", () => {
    const name = 'Name';
    const image = 'Image';
    const onScoldMock = jest.fn();
    const wrapper = shallow(
      <DogDetails
        name={name}
        image={image}
        onScold={onScoldMock}
        disabled={false}
      />
    );
    wrapper.invoke("onBark")();
    expect(mockEnqueue).toHaveBeenCalled();
  });
});
