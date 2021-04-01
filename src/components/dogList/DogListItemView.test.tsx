import React from 'react';
import { shallow } from 'enzyme';
import DogListItemView from './DogListItemView';
import { Avatar, Chip, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { capitalize } from 'lodash';

describe('DogListItemView', () => {
  it('should render correctly', () => {
    // Given
    const name = 'Name';
    const image = 'Image';
    const scolded = 0;
    const selected = false;
    const onSelectDogMock = jest.fn();
    // When
    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(
      wrapper.matchesElement(
        <ListItem 
          button
          selected={selected}
        >
          <ListItemAvatar>
            <Avatar alt={name} src={image} />
          </ListItemAvatar>
          <ListItemText primary={capitalize(name)} />
          <ListItemSecondaryAction>
            <Chip label={scolded} />
          </ListItemSecondaryAction>
        </ListItem>
      )
    ).toBe(true);
  });

  it("should handle the onClick event", () => {
    // Given
    const name = 'Name';
    const image = 'Image';
    const scolded = 0;
    const selected = false;
    const onSelectDogMock = jest.fn();
    // When
    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    wrapper.find(ListItem).first().simulate("click");
    expect(onSelectDogMock).toHaveBeenCalled();
  });
});
