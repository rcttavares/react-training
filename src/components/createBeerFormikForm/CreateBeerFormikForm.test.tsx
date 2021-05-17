import { shallow } from 'enzyme';
import CreateBeerFormikForm from './CreateBeerFormikForm';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { IBeerFormik } from '../../types/Types';

const values: IBeerFormik = {
  beerName: '',
  beerType: '',
  hasCorn: false,
  ingredients: ''
}

describe('CreateBeerFormikForm', () => {
  it('should render with the right props', () => {
		const wrapper = shallow(<CreateBeerFormikForm />);

		expect(wrapper.type()).toBe(CreateBeerFormikFormView);
		expect(wrapper.prop('initialValues')).toStrictEqual(values);
	});

  it('should handle the onSubmit callback', () => {
    console.log = jest.fn();

    const resetForm = jest.fn();
    const wrapper = shallow(<CreateBeerFormikForm />);
		wrapper.invoke("onSubmit")(values, { resetForm });

		expect(console.log).toHaveBeenCalled();
    expect(resetForm).toHaveBeenCalled();
	});
});
