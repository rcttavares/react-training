import React from 'react';
import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../assets/dog.jpeg';

describe('DogDetails', () => {
  it('should render children elements correctly', () => {
    const wrapper = shallow(
      <DogDetails />
    );

    expect(
      wrapper.matchesElement(
        <Card>
          <CardActionArea>
            <CardContent style={{ padding: 10 }}>
              <Typography variant="h5" component="h2">
                Buddy
              </Typography>
            </CardContent>
            <img src={image} alt="Dog" style={{ width: 'inherit' }} />
          </CardActionArea>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button color="primary">
              Bark!
            </Button>
          </CardActions>
        </Card>
      )
    ).toBe(true)
  });
});
