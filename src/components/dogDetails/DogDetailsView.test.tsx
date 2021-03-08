import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import { useStyles } from './DogDetailsView.styles';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

jest.mock('./DogDetailsView.styles');

describe('DogDetailsView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "card": "card",
      "cardContent": "cardContent",
      "cardMedia": "cardMedia",
      "cardActions": "cardActions"
    });
  });

  it('should render correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const onScoldMock = jest.fn();
    const onBarkMock = jest.fn();
    const children = <p>Children</p>;
    const wrapper = shallow(
      <DogDetailsView 
        name={name}
        image={image}
        onScold={onScoldMock}
        onBark={onBarkMock}
        children={children}
      />
    );

    expect(
      wrapper.matchesElement(
        <Card className="card">
          <CardContent className="cardContent">
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
          <CardMedia className="cardMedia" component="img" image={image} alt="Dog" title="Dog" />
          <CardActions className="cardActions">
            <ButtonView label="Scold!" onClick={onScoldMock} />
            <ButtonView label="Bark!" onClick={onBarkMock} />
          </CardActions>
          <CardActions className="cardActions">
            {children}
          </CardActions>
        </Card>
      )
    ).toBe(true);
  });
});
