import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './list';
import Loader from '../../UI/loader/loader';

configure({adapter: new Adapter});

describe('<List />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<List />);
    })

    it('should show "No Records found when records length is zero"' ,() => {
        wrapper.setProps({
            records: []
        })
        expect(wrapper.find('No records Found'));
    });

    it('should load Loader component when isLoading is true', () => {
        wrapper.setProps({isLoading: true});
        expect(wrapper.find(Loader));
    })
})