import './index.css'
import Header from '../Header'
import SideBarCard from '../SideBarCard'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundDescription,
} from './StyledComponent'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <SideBarCard />
      <div className="not-found-sub-container">
        <NxtThemeContext.Consumer>
          {value => {
            const {theme} = value
            const notFoundImage = theme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            return (
              <div className="not-found-container">
                <img
                  src={notFoundImage}
                  alt="not found"
                  className="not-found-image"
                />
                <NotFoundHeading value={theme}>Page Not Found</NotFoundHeading>
                <NotFoundDescription value={theme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundDescription>
              </div>
            )
          }}
        </NxtThemeContext.Consumer>
      </div>
    </NotFoundContainer>
  </>
)

export default NotFound
