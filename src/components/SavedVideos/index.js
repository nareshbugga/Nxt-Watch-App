import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideBarCard from '../SideBarCard'
import SavedContext from '../../SavedVideoContext/SavedContext'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import TrendingVideoCardItem from '../TrendingVideoCardItem'
import './index.css'
import {
  SavedContainer,
  SavedHeader,
  SavedLogo,
  SavedHeaderHeading,
  NoSavedHeading,
  NoSavedDescription,
} from './StyledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <NxtThemeContext.Consumer>
        {Value => {
          const {theme} = Value
          return (
            <SavedContext.Consumer>
              {value => {
                const {savedVideoList} = value
                return (
                  <>
                    <Header />
                    <SavedContainer data-testid="savedVideos" value={theme}>
                      <SideBarCard />
                      <div className="saved-sub-container">
                        <SavedHeader value={theme} data-testid="banner">
                          <SavedLogo value={theme}>
                            <AiFillFire size={30} color="#ff0000" />
                          </SavedLogo>
                          <SavedHeaderHeading value={theme}>
                            Saved Videos
                          </SavedHeaderHeading>
                        </SavedHeader>
                        {savedVideoList.length === 0 ? (
                          <div className="no-saved-container">
                            <img
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                              alt="no saved videos"
                              className="no-saved-image"
                            />
                            <NoSavedHeading value={theme}>
                              No saved videos found
                            </NoSavedHeading>
                            <NoSavedDescription value={theme}>
                              You can save your videos while watching them
                            </NoSavedDescription>
                          </div>
                        ) : (
                          <ul className="saved-un-order">
                            {savedVideoList.map(eachVideoItem => (
                              <TrendingVideoCardItem
                                eachVideoItem={eachVideoItem}
                                key={eachVideoItem.id}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    </SavedContainer>
                  </>
                )
              }}
            </SavedContext.Consumer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default SavedVideos
