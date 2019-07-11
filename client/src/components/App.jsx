import React from 'react';
import css from '../css/app.css';
import ReviewSidebar from './ReviewSidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="review-component-container">
        <div className="profile-container">
          <ReviewSidebar />
        </div>
        <div className="review-container">

        </div>
      </div>
    )
  }
}

export default App;