import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

const mockEnqueue = jest.fn();
jest.mock('notistack', () => ({
  ...jest.requireActual('notistack') as {},
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue
    };
  }
}));

const name = 'Name';
const image = 'Image';
const onScoldMock = jest.fn();

describe('DogDetails', () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(
      <DogDetails
        name={name}
        image={image}
        onScold={onScoldMock}
        disabled={false}
      />
    );

    expect(wrapper.type()).toBe(DogDetailsView);
  });

  it("should handle the onBark event", () => {
    const wrapper = shallow(
      <DogDetails
        name={name}
        image={image}
        onScold={onScoldMock}
        disabled={false}
      />
    );

    wrapper.invoke("onBark")();
    expect(mockEnqueue).toHaveBeenCalled();
  });
});
