import React from 'react';
import ReviewSidebar from './ReviewSidebar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render () {
      return (
          <div>
              <ReviewSidebar />
          </div>
      )
  }
}

export default App;