import React from 'react';
import { shallow } from 'enzyme';
import DogListItem from './DogListItem';
import DogListItemView from './DogListItemView';

describe('DogListItem', () => {
  it('should render the view with the right props', () => {
    const name = 'Name';
    const image = 'Image';
    const scolded = 0;
    const selected = false;
    const onSelectDogMock = jest.fn();
    // Given
    const wrapper = shallow(
      <DogListItem
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(wrapper.type()).toBe(DogListItemView);
  });
});
