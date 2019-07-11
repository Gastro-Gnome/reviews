import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders children when passed in', () => {
    expect(mount(<App />).contains(<div className="review-component-container" />)).toBe(true);
  });
});

// it('renders children when passed in', () => {
//   const wrapper = shallow((
//     <MyComponent>
//       <div className="unique" />
//     </MyComponent>
//   ));
//   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
// });