import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './dashboard';
import Button from '../../UI/button/button';
import Loader from '../../UI/loader/loader';

configure({adapter: new Adapter});

describe('<Dashboard />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Dashboard />);
    })

    it('should load Button component thrice' ,() => {
        expect(wrapper.find(Button)).toHaveLength(4);
    });

    it('should load Loader component when isLoading is true', () => {
        wrapper.setProps({isLoading: true});
        expect(wrapper.find(Loader));
    })
})