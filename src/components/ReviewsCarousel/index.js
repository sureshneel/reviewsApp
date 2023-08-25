// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)

    // eslint-disable-next-line react/no-unused-state
    this.state = {currentReview: 0, propLength: 4}
  }

  rightArrow = () => {
    const {currentReview, propLength} = this.state
    if (currentReview < propLength - 1) {
      this.setState({currentReview: currentReview + 1})
    }
  }

  leftArrow = () => {
    const {currentReview, propLength} = this.state
    if (currentReview > 0 && currentReview < propLength) {
      this.setState({currentReview: currentReview - 1})
    }
  }

  render() {
    const {currentReview} = this.state

    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      currentReview
    ]

    return (
      <div className="review-bg-container">
        <h1 className="review-main-heading">Reviews</h1>

        <div className="review-card">
          <button
            type="button"
            className="arrow-button"
            onClick={this.leftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-mark"
              alt="left arrow"
            />
          </button>
          <div className="review-person-card">
            <img src={imgUrl} className="review-person-image" alt={username} />
            <p className="person-name"> {username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review-description">{description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              className="arrow-mark"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
