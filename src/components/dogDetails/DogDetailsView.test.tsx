import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import { useStyles } from './DogDetailsView.styles';

jest.mock('./DogDetailsView.styles');

describe('DogDetailsView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "card": "card",
      "cardContent": "cardContent",
      "cardActions": "cardActions"
    });
  });

  it('should render correctly', () => {
    const name = 'Name';
    const image = 'Image';
    const onScold = jest.fn();
    const onBark = jest.fn();
    const children = <p>Children</p>;
    const wrapper = shallow(
      <DogDetailsView 
        name={name}
        image={image}
        onScold={onScold}
        onBark={onBark}
        children={children}
      />
    );

    //console.log(wrapper.debug());
    expect(wrapper).toBeTruthy();
  });
});
