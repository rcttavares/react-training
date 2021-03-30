import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormView from './CreateBeerFormView';
import { useStyles } from './CreateBeerFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import Button from '../button/Button';

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
    const beerName = "Beer name";
    const beerType = "Beer type";
    const hasCorn = false;
    const ingredients = "Ingredients";
    const onChangeInputMock = jest.fn();
    const onChangeSelectMock = jest.fn();
    const onChangeCheckboxMock = jest.fn();
    const onSubmitMock = jest.fn();

    const wrapper = shallow(
      <CreateBeerFormView
        beerName={beerName}
        beerType={beerType}
        hasCorn={hasCorn}
        ingredients={ingredients}
        onChangeInput={onChangeInputMock}
        onChangeSelect={onChangeSelectMock}
        onChangeCheckbox={onChangeCheckboxMock}
        onSubmit={onSubmitMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          <Typography variant="h5" component="h1" className="title">
            Beer Form
          </Typography>

          <form onSubmit={onSubmitMock}>
            <div className="container">
              <TextField
                label="Beer name"
                name="beerName"
                variant="outlined"
                fullWidth
                value={beerName}
                onChange={onChangeInputMock}
              />
            </div>

            <div className="container">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Beer type</InputLabel>
                <Select
                  label="Beer type"
                  name="beerType"
                  value={beerType}
                  onChange={onChangeSelectMock}
                >
                  <MenuItem value={1}>Ale</MenuItem>
                  <MenuItem value={2}>Lager</MenuItem>
                  <MenuItem value={3}>Stout</MenuItem>
                  <MenuItem value={4}>Malt</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="container">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Has corn"
                name="hasCorn"
                checked={hasCorn}
                onChange={onChangeCheckboxMock}
              />
            </div>

            <div className="container">
              <TextField
                label="Ingredients"
                name="ingredients"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={ingredients}
                onChange={onChangeInputMock}
              />
            </div>

            <div className="button">
              <Button
                label="Submit"
                disabled={!beerName || !beerType || !ingredients}
              />
            </div>
          </form>
        </Paper>
      )
    ).toBe(true);
  });
});
