import React from 'react';
import css from '../css/app.css';
import Loader from './Loader';
import ReviewSidebar from './ReviewSidebar';
import ReviewContent from './ReviewContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      reviews: [],
      businessId: '821c8138-bf7d-441c-a451-76be14a8330b',
    }

    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    const { businessId } = this.state;
    fetch(`/reviews/${businessId}`, {
      method: 'GET',
    }).then(res => res.json())
      .then(res => this.setState({ reviews: res }))
      .catch(err => console.error(err));
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render() {

    if(this.state.reviews.length === 0) {
      return (
        <Loader />
      )
    } else {

      return (
        <div>
          {
            this.state.reviews.map(review => {
              const {
                profile_name,
                friends,
                profile_image,
                review_total,
                photos,
                photo_total,
                level,
                location,
                check_ins,
                seated,
                useful_count,
                funny_count,
                cool_count,
                text,
                url,
                voted
              } = review;
              
              return (
                <div className="review-component-container">
                  <div className="profile-container">
                    <ReviewSidebar 
                      profileImage={profile_image}
                      profileName={profile_name}
                      location={location}
                      totalFriends={friends}
                      totalReviews={review_total}
                      totalPhotos={photo_total}
                      handleHover={this.handleHover} 
                      isHovered={this.state.isHovered}/>
                  </div>
                  <div className="review-container">
                    <ReviewContent reviews={this.state.reviews}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default App;
