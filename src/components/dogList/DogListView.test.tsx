import React from 'react';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { useStyles } from './DogListView.styles';
import { Avatar, Chip, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';
import { Dog } from '../../types/DogListType';

jest.mock('./DogListView.styles');

describe('DogListView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "list": "list"
    });
  });

  it('should render correctly', () => {
    // Given
    const dogList: Dog[] = [{ name: '', image: '', scolded: 0 }];
    const selectedDog: Dog = { name: '', image: '', scolded: 0 };
    const onSelectDogMock = jest.fn();
    // When
    const wrapper = shallow(
      <DogListView 
        dogList={dogList}
        selectedDog={selectedDog}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogList.map((dog, index) => {
            return (
              <List key={index} className="list">
                <ListItem 
                  button
                  selected={dog.name === selectedDog.name}
                  onClick={onSelectDogMock(dog.name)}
                >
                  <ListItemAvatar>
                    <Avatar alt={dog.name} src={dog.image} />
                  </ListItemAvatar>
                  <ListItemText primary={capitalize(dog.name)} />
                  <ListItemSecondaryAction>
                    <Chip label={dog.scolded} />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            )
          })}
        </Paper>
      )
    ).toBe(true);
  });

  it('should render the same length of the dog breeds list', () => {
    // Given
    const dogList: Dog[] = [{ name: '', image: '', scolded: 0 }];
    const selectedDog: Dog = { name: '', image: '', scolded: 0 };
    const onSelectDogMock = jest.fn();
    // When
    const wrapper = shallow(
      <DogListView
        dogList={dogList}
        selectedDog={selectedDog}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(wrapper.find(List).length).toEqual(dogList.length);
  });

  it('should capitalize the first letter of the dog breed name', () => {
    // Given
    const dogList: Dog[] = [{ name: '', image: '', scolded: 0 }];
    const selectedDog: Dog = { name: '', image: '', scolded: 0 };
    const onSelectDogMock = jest.fn();
    // When
    const wrapper = shallow(
      <DogListView
        dogList={dogList}
        selectedDog={selectedDog}
        onSelectDog={onSelectDogMock}
      />
    );
    // Then
    expect(
      wrapper.find(List).map(dog => dog.text())
    ).toEqual(dogList.map(dog => capitalize(dog.name)));
  });
});
