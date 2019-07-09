import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App.jsx';

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toMatchSnapshot();
  });
});