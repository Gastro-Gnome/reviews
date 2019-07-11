import React from 'react';
import css from '../css/app.css';
import ReviewSidebar from './ReviewSidebar.jsx';
import ReviewContent from './ReviewContent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      reviews: [],
      businessId: 'deadhead123'
    }

    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    const { businessId } = this.state;
    fetch(`/reviews/${businessId}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => this.setState({ reviews: res }))
      .catch(err => console.log(err));
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
    console.log(this.state);
  }

  render () {
    return (
      <div className="review-component-container">
        <div className="profile-container">
          <ReviewSidebar handleHover={this.handleHover} isHovered={this.state.isHovered}/>
        </div>
        <div className="review-container">
          <ReviewContent />
        </div>
      </div>
    )
  }
}

export default App;