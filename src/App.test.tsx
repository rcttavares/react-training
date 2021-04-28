import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it("should render App component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
