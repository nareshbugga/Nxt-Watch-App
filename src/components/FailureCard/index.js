import './index.css'

import {
  NoVideoHeading,
  NoVideoDescription,
  FailureContainer,
} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'

const FailureCard = props => {
  const {onRetry} = props
  const RetryData = () => {
    onRetry()
  }

  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {theme} = value
        const failureImage = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer value={theme}>
            <img
              src={failureImage}
              alt="failure view"
              className="failure-view-image"
            />
            <NoVideoHeading value={theme}>
              Oops! Something Went Wrong
            </NoVideoHeading>
            <NoVideoDescription>
              We are having some trouble to complete your request. Please
              try again.
            </NoVideoDescription>
            <button type="button" className="retry-button" onClick={RetryData}>
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default FailureCard
