import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import { useStyles } from './DogDetailsView.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonView from '../button/ButtonView';

jest.mock('./DogDetailsView.styles');

describe('DogDetailsView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "classe": "card",
      "cardContent": "cardContent",
      "cardActions": "cardActions"
    });
  });

  it('should render correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const label = 'Label';
    const onScold = jest.fn();
    const onBark = jest.fn();
    const children = <p>Children</p>;
    const wrapper = shallow(
      <DogDetailsView name={name} image={image} onScold={onScold} onBark={onBark} children={children} />
    );

    expect(
      wrapper.matchesElement(
        <Card className="card">
          <CardActionArea>
            <CardContent className="cardContent">
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={image}
              alt="Dog"
              title="Dog"
            />
          </CardActionArea>
          <CardActions className="cardActions">
            <ButtonView label={label} onClick={onScold} />
            <ButtonView label={label} onClick={onBark} />
          </CardActions>
          <CardActions className="cardActions">
            {children}
          </CardActions>
        </Card>
      )
    ).toBeTruthy();
  });
});
