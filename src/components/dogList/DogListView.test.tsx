import React from 'react';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { useStyles } from './DogListView.styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core';
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
    const dogList: Dog[] = [];
    // When
    const wrapper = shallow(
      <DogListView dogList={dogList} />
    );
    // Then
    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogList.map((dog, index) => {
            return (
              <List key={index} className="list">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt={dog.name} src={dog.image} />
                  </ListItemAvatar>
                  <ListItemText primary={capitalize(dog.name)} />
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
    const dogList: Dog[] = [];
    // When
    const wrapper = shallow(
      <DogListView dogList={dogList} />
    );
    // Then
    expect(wrapper.find(List).length).toEqual(dogList.length);
  });

  it('should capitalize the first letter of the dog breed name', () => {
    // Given
    const dogList: Dog[] = [];
    // When
    const wrapper = shallow(
      <DogListView dogList={dogList} />
    );
    // Then
    expect(
      wrapper.find(List).map(dog => dog.text())
    ).toEqual(dogList.map(dog => capitalize(dog.name)));
  });
});
