import './index.css'
import {Heading, Description} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'

const ContactUs = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <div className="contact-us-container">
          <Heading value={theme}>CONTACT US</Heading>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="contact-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="contact-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="contact-logo"
            />
          </div>

          <Description value={theme}>
            Enjoy! Now to see your channels and recommendations!
          </Description>
        </div>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default ContactUs
