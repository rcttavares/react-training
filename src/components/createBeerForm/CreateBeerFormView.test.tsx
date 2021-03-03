import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormView from './CreateBeerFormView';
import { useStyles } from './CreateBeerFormView.styles';

jest.mock('./CreateBeerFormView.styles');

describe('CreateBeerFormView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "title": "title",
      "container": "container",
      "button": "button"
    });
  });

  it('should render correctly', () => {
    const beerName = 'Beer name';
    const beerType = 'Beer type';
    const hasCorn = false;
    const ingredients = 'Ingredients';
    const onChangeInput = jest.fn();
    const onChangeSelect = jest.fn();
    const onChangeCheckbox = jest.fn();
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateBeerFormView
        beerName={beerName}
        beerType={beerType}
        hasCorn={hasCorn}
        ingredients={ingredients}
        onChangeInput={onChangeInput}
        onChangeSelect={onChangeSelect}
        onChangeCheckbox={onChangeCheckbox}
        onSubmit={onSubmit}
      />
    );

    expect(wrapper).toBeTruthy();
  });
});
