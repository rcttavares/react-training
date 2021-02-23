import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '../Button/Button';

describe('DogDetails', () => {
  it('should render children elements correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const label = 'Label';
    const onBark = jest.fn();
    const wrapper = shallow(
      <DogDetails name={name} image={image} onBark={onBark} />
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
            <Button label={label} onClick={onBark} />
          </CardActions>
        </Card>
      )
    ).toBe(false)
  });
});
