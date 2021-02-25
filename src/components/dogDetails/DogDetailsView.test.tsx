import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonView from '../button/ButtonView';

describe('DogDetailsView', () => {
  it('should render children elements correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const label = 'Label';
    const onScold = jest.fn();
    const onBark = jest.fn();
    const children = <div />;
    const wrapper = shallow(
      <DogDetailsView name={name} image={image} onScold={onScold} onBark={onBark} children={children} />
    );

    expect(
      wrapper.matchesElement(
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
            <img src={image} alt="Dog" />
          </CardActionArea>
          <CardActions>
            <ButtonView label={label} onClick={onScold} />
            <ButtonView label={label} onClick={onBark} />
          </CardActions>
          <CardActions>
            {children}
          </CardActions>
        </Card>
      )
    ).toBe(false)
  });
});
