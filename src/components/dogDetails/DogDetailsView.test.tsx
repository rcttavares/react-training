import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import { useStyles } from './DogDetailsView.styles';
import { Avatar, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { capitalize } from 'lodash';
import Button from '../button/Button';

jest.mock('./DogDetailsView.styles');

describe('DogDetailsView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "card": "card",
      "cardContent": "cardContent",
      "title": "title",
      "avatar": "avatar",
      "icon": "icon",
      "cardActions": "cardActions"
    });
  });

  it('should render correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const onScoldMock = jest.fn();
    const onBarkMock = jest.fn();
    const wrapper = shallow(
      <DogDetailsView 
        name={name}
        image={image}
        onScold={onScoldMock}
        onBark={onBarkMock}
        disabled={false}
      />
    );

    expect(
      wrapper.matchesElement(
        <Card className="card">
          <CardContent className="cardContent">
            <Typography variant="h5" component="h1" className="title">
              {capitalize(name) ? capitalize(name) : 'No dog selected!'}
            </Typography>
          </CardContent>
          <Avatar className="avatar" alt={name} src={image}>
            <PetsIcon className="icon" />
          </Avatar>
          <CardActions className="cardActions">
            <Button label="Scold!" onClick={onScoldMock} disabled={false} />
            <Button label="Bark!" onClick={onBarkMock} disabled={false} />
          </CardActions>
        </Card>
      )
    ).toBe(true);
  });
});
