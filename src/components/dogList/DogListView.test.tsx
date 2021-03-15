import React from 'react';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { useStyles } from './DogListView.styles';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { capitalize } from 'lodash';

jest.mock('./DogListView.styles');

describe('DogListView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "list": "list"
    });
  });

  it('should render correctly', () => {
    const dogList = [''];
    const wrapper = shallow(
      <DogListView dogList={dogList} />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogList.map(dog => {
            return (
              <List key={dog} className="list">
                <ListItem button>
                  <ListItemText primary={capitalize(dog)} />
                </ListItem>
              </List>
            )
          })}
        </Paper>
      )
    ).toBe(true);
  });
});
