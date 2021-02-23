import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DogDetails from './components/DogDetails/DogDetails';

describe('App', () => {
  it('should render elements correctly', () => {
    const onBark = jest.fn();
    const wrapper = shallow(
      <App />
    );

    expect(
      wrapper.matchesElement(
        <DogDetails 
          name="Buddy"
          image="https://www.azpetshop.com.br/blog/wp-content/uploads/2018/06/french-bulldog-summer-smile-joy-160846-805x452.jpeg"
          onBark={onBark}
        />
      )
    ).toBeTruthy();
  });
});
