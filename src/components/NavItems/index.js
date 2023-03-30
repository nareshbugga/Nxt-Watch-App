import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {ItemContainer, ListContainer, Item, TabItem} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import ActiveTab from '../../TabContext/ActiveTab'
import './index.css'

const menuList = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class NavItems extends Component {
  render() {
    return (
      <NxtThemeContext.Consumer>
        {Value => {
          const {theme} = Value
          const iconColor = theme ? '#cbd5e1' : '#383838'
          const textColor = theme ? '#ffffff' : '#383838'
          const tabBg = theme ? '#606060' : '#f1f5f9'
          return (
            <ActiveTab.Consumer>
              {value => {
                const {activeTab, changeActiveTab} = value
                return (
                  <nav className="nav-container">
                    <ListContainer>
                      <Link to="/" className="list-nav-link">
                        <TabItem
                          value={activeTab === menuList.home ? tabBg : null}
                          onClick={() => changeActiveTab(menuList.home)}
                          className="list-items"
                          key="Home"
                        >
                          <ItemContainer>
                            <AiFillHome
                              size={25}
                              color={
                                activeTab === menuList.home
                                  ? '#ff0000'
                                  : iconColor
                              }
                            />
                            <Item
                              value={activeTab === menuList.home}
                              textColor={textColor}
                            >
                              Home
                            </Item>
                          </ItemContainer>
                        </TabItem>
                      </Link>
                      <Link to="/trending" className="list-nav-link">
                        <TabItem
                          value={activeTab === menuList.trending ? tabBg : null}
                          onClick={() => changeActiveTab(menuList.trending)}
                          className="list-items"
                          key="Trending"
                        >
                          <ItemContainer>
                            <AiFillFire
                              size={25}
                              color={
                                activeTab === menuList.trending
                                  ? '#ff0000'
                                  : iconColor
                              }
                            />
                            <Item
                              value={activeTab === menuList.trending}
                              textColor={textColor}
                            >
                              Trending
                            </Item>
                          </ItemContainer>
                        </TabItem>
                      </Link>
                      <Link to="/gaming" className="list-nav-link">
                        <TabItem
                          value={activeTab === menuList.gaming ? tabBg : null}
                          onClick={() => changeActiveTab(menuList.gaming)}
                          className="list-items"
                          key="Gaming"
                        >
                          <ItemContainer>
                            <SiYoutubegaming
                              size={25}
                              color={
                                activeTab === menuList.gaming
                                  ? '#ff0000'
                                  : iconColor
                              }
                            />
                            <Item
                              value={activeTab === menuList.gaming}
                              textColor={textColor}
                            >
                              Gaming
                            </Item>
                          </ItemContainer>
                        </TabItem>
                      </Link>
                      <Link to="/saved-videos" className="list-nav-link">
                        <TabItem
                          value={
                            activeTab === menuList.savedVideos ? tabBg : null
                          }
                          onClick={() => changeActiveTab(menuList.savedVideos)}
                          className="list-items"
                          key="SavedVideos"
                        >
                          <ItemContainer>
                            <MdPlaylistAdd
                              size={25}
                              color={
                                activeTab === menuList.savedVideos
                                  ? '#ff0000'
                                  : iconColor
                              }
                            />
                            <Item
                              value={activeTab === menuList.savedVideos}
                              textColor={textColor}
                            >
                              Saved videos
                            </Item>
                          </ItemContainer>
                        </TabItem>
                      </Link>
                    </ListContainer>
                  </nav>
                )
              }}
            </ActiveTab.Consumer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default NavItems
