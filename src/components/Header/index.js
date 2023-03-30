import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import './index.css'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import {
  HeaderContainerMobile,
  Navigation,
  HeaderContainerDeskTop,
  PopUpHeading,
  ConfirmButton,
  CancelButton,
} from './StyledComponent'

class Header extends Component {
  onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {theme, changeTheme} = value
          const logoColor = theme ? '#ffffff' : '#000000'
          const popupContent = theme
            ? 'popup-content-dark'
            : 'popup-content-light'
          const logoUrl = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <div>
              <HeaderContainerMobile value={theme}>
                <div>
                  <Link to="/">
                    <img
                      src={logoUrl}
                      alt="website logo"
                      className="website-logo"
                    />
                  </Link>
                </div>
                <Navigation>
                  <button
                    type="button"
                    data-testid="theme"
                    className="theme-button"
                    onClick={() => changeTheme()}
                  >
                    {theme ? (
                      <BsSun size={25} color={logoColor} />
                    ) : (
                      <FaMoon size={25} color={logoColor} />
                    )}
                  </button>

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile-image"
                  />
                  <div>
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="logout">
                          Logout
                        </button>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <div className={popupContent}>
                          <div>
                            <PopUpHeading value={theme}>
                              Are you sure, you want to logout
                            </PopUpHeading>
                          </div>
                          <div>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.onLogOut}
                            >
                              Confirm
                            </ConfirmButton>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </Navigation>
              </HeaderContainerMobile>
              <HeaderContainerDeskTop value={theme}>
                <div>
                  <img
                    src={logoUrl}
                    alt="website logo"
                    className="website-logo"
                  />
                </div>
                <Navigation>
                  <button
                    type="button"
                    data-testid="theme"
                    className="theme-button"
                    onClick={() => changeTheme()}
                  >
                    {theme ? (
                      <BsSun size={25} color={logoColor} />
                    ) : (
                      <FaMoon size={25} color={logoColor} />
                    )}
                  </button>
                  <GiHamburgerMenu
                    size={25}
                    className="hamburger"
                    color={logoColor}
                  />
                  <div>
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="mobile-log-out">
                          <FiLogOut size={25} color={logoColor} />
                        </button>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <div className={popupContent}>
                          <div>
                            <PopUpHeading>
                              Are you sure, you want to logout
                            </PopUpHeading>
                          </div>
                          <div>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.onLogOut}
                            >
                              Confirm
                            </ConfirmButton>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </Navigation>
              </HeaderContainerDeskTop>
            </div>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
