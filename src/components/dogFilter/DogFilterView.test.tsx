import { shallow } from 'enzyme';
import DogFilterView from './DogFilterView';
import { useStyles } from './DogFilterView.styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

jest.mock('./DogFilterView.styles.ts');

describe('DogFilterView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "flex": "flex",
      "letter": "letter",
      "number": "number",
    });
  });

  const filterOptions = ['a', 'b', 'c', 'd'];
  const getDogBreedsLengthMock = jest.fn();
  const onChangeOptionMock = jest.fn();

  it('should render correctly', () => {
    const wrapper = shallow(
      <DogFilterView 
        filterOptions={filterOptions}
        getDogBreedsLength={getDogBreedsLengthMock}
        onChangeOption={onChangeOptionMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          <RadioGroup row aria-label="dogLetter" name="dogLetter" onChange={onChangeOptionMock}>
            {filterOptions.map((item) => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio color="primary" />}
                labelPlacement="bottom"
                label={
                  <div className="flex">
                    <Typography className="letter">{item.toUpperCase()}</Typography>
                    <Typography className="number">({getDogBreedsLengthMock(item)})</Typography>
                  </div>
                }
              />
            ))}
          </RadioGroup>
        </Paper>
      )
    ).toBe(true);
  });

  it('should render all letters of alphabet', () => {
    const wrapper = shallow(
      <DogFilterView 
        filterOptions={filterOptions}
        getDogBreedsLength={getDogBreedsLengthMock}
        onChangeOption={onChangeOptionMock}
      />
    );

    expect(wrapper.find(FormControlLabel)).toHaveLength(filterOptions.length);
  });
});
