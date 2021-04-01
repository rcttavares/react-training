import React from 'react';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { useStyles } from './DogListView.styles';
import { List, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';
import { Dog } from '../../types/DogListType';
import DogListItem from './DogListItem';

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
                <DogListItem
                  name={dog.name}
                  image={dog.image}
                  scolded={dog.scolded}
                  selected={dog.name === selectedDog.name}
                  onSelectDog={onSelectDogMock}
                />
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
    const dogList: Dog[] = [];
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
