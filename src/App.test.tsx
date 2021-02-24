import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DogDetailsView from './components/dogDetails/DogDetailsView';

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack') as {},
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

describe('App', () => {
  it('should render elements correctly', () => {
    const scold = jest.fn();
    const bark = jest.fn();
    const wrapper = shallow(
      <App />
    );

    expect(
      wrapper.matchesElement(
        <DogDetailsView 
          name="Buddy"
          image="https://www.azpetshop.com.br/blog/wp-content/uploads/2018/06/french-bulldog-summer-smile-joy-160846-805x452.jpeg"
          onScold={scold}
          onBark={bark}
        />
      )
    ).toBe(false);
  });
});
