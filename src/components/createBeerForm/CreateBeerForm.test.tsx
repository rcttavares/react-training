import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView';

describe('CreateBeerForm', () => {
    it('should render with the right props', () => {
		const wrapper = shallow(<CreateBeerForm />);
		expect(wrapper.type()).toBe(CreateBeerFormView);
		expect(wrapper.prop('beerName')).toBe('');
		expect(wrapper.prop('beerType')).toBe('');
		expect(wrapper.prop('hasCorn')).toBe(false);
		expect(wrapper.prop('ingredients')).toBe('');
	});

    it('should update beerName when onChange is called passing a new value', () => {
		const event = {
			target: {
				name: 'beerName',
				value: ''
			}
		} as React.ChangeEvent<HTMLInputElement>;
		const wrapper = shallow(<CreateBeerForm />);
		wrapper.invoke('onChangeInput')(event);
		expect(wrapper.prop('beerName')).toBe('');
	});

    it('should update beerType when onChange is called passing a new value', () => {
		const event = {
			target: {
				name: 'beerType',
				value: ''
			}
		} as React.ChangeEvent<HTMLInputElement>;
		const wrapper = shallow(<CreateBeerForm />);
		wrapper.invoke('onChangeSelect')(event);
		expect(wrapper.prop('beerType')).toBe('');
	});

    it('should update hasCorn when onChange is called passing boolean of true or false', () => {
		const event = {
			target: {
				name: 'hasCorn',
				checked: false
			}
		} as React.ChangeEvent<HTMLInputElement>;
		const wrapper = shallow(<CreateBeerForm />);
		wrapper.invoke('onChangeCheckbox')(event);
		expect(wrapper.prop('hasCorn')).toBe(true);
	});

    it('should update ingredients when onChange is called passing a new value', () => {
		const event = {
			target: {
				name: 'ingredients',
				value: ''
			}
		} as React.ChangeEvent<HTMLInputElement>;
		const wrapper = shallow(<CreateBeerForm />);
		wrapper.invoke('onChangeInput')(event);
		expect(wrapper.prop('ingredients')).toBe('');
	});

    it('should submit form correctly', () => {
		console.log = jest.fn();
	
		const event = {
		  	preventDefault() {},
		} as React.FormEvent;
		const wrapper = shallow(<CreateBeerForm />);
		wrapper.invoke("onSubmit")(event);
		expect(console.log).toHaveBeenCalled();
	});
});
