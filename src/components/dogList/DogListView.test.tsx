import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { useStyles } from './DogListView.styles';
import { List, Paper } from '@material-ui/core';
import { IDog } from '../../types/Types';
import DogListItem from './DogListItem';

jest.mock('./DogListView.styles');

describe('DogListView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "list": "list"
    });
  });

  it('should render correctly', () => {
    const dogList: IDog[] = [{ name: '', image: '', scolded: 0 }];
    const selected: IDog = { name: '', image: '', scolded: 0 };
    const onSelectMock = jest.fn();

    const wrapper = shallow(
      <DogListView 
        dogList={dogList}
        selected={selected}
        onSelect={onSelectMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogList.map((item, index) => {
            return (
              <List key={index} className="list">
                <DogListItem
                  name={item.name}
                  image={item.image}
                  scolded={item.scolded}
                  selected={item.name === selected.name}
                  onSelect={onSelectMock}
                />
              </List>
            )
          })}
        </Paper>
      )
    ).toBe(true);
  });

  it('should render the same length of the dog breeds list', () => {
    const dogList: IDog[] = [{ name: '', image: '', scolded: 0 }];
    const selected: IDog = { name: '', image: '', scolded: 0 };
    const onSelectMock = jest.fn();

    const wrapper = shallow(
      <DogListView 
        dogList={dogList}
        selected={selected}
        onSelect={onSelectMock}
      />
    );

    expect(wrapper.find(List).length).toEqual(dogList.length);
  });
});
