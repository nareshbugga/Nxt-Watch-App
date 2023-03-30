import {SideBar} from './StyledComponent'
import NavItems from '../NavItems'
import ContactUs from '../ContactUs'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'

const SideBarCard = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <SideBar value={theme}>
          <NavItems />
          <ContactUs />
        </SideBar>
      )
    }}
  </NxtThemeContext.Consumer>
)
export default SideBarCard
