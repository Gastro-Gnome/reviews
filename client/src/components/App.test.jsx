import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';
import Loader from './Loader.jsx';
import axios from 'axios';
import ReviewContent from './ReviewContent';
import ReviewSidebar from './ReviewSidebar';

configure({ adapter: new Adapter() });
configure({ disableLifecycleMethods: true });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/reviews/821c8138-bf7d-441c-a451-76be14a8330b`)
      .then(({ data }) => {
        console.log(Array.isArray(data))
        wrapper.setState({reviews: data})
        resolve();
      })
      .catch(err => reject(err))
  })
})

describe('<App />', () => {
  it('renders Loader before receiving props', () => {
    wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Loader />)).toBeTruthy();
  });

  it('renders Reviews content and sidebar after receiving props', () => {
    expect(wrapper.containsMatchingElement([<ReviewContent />, <ReviewSidebar />]))
  })
});