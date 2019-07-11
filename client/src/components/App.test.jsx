import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';
import ReviewSidebar from './ReviewSidebar.jsx';

configure({ adapter: new Adapter() });
configure({ disableLifecycleMethods: true });

describe('<App />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find(ReviewSidebar)).toHaveLength(1);
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