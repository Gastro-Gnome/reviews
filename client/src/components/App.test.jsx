import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toMatchSnapshot();
  });
});