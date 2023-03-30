import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBarCard from '../SideBarCard'
import FailureCard from '../FailureCard'
import LoaderCard from '../LoaderCard'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'
import {
  GamingContainer,
  GamingHeader,
  GameLogo,
  GameHeaderHeading,
  GamingCardHeading,
  GamingCardDetails,
} from './StyledComponent'

const viewsList = {
  Initial: 'INITIAL',
  Success: 'SUCCESS',
  Failure: 'FAILURE',
  InProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {gamingList: [], viewStatus: viewsList.Initial}

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({viewStatus: viewsList.InProgress})
    const token = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const {videos} = data
      const updateGamingData = videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingList: updateGamingData,
        viewStatus: viewsList.Success,
      })
    } else {
      this.setState({viewStatus: viewsList.Failure})
    }
  }

  onRetry = () => {
    this.getGamingDetails()
  }

  gamingDataContainer = () => {
    const {gamingList} = this.state

    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <GamingHeader value={theme} data-testid="banner">
                <GameLogo value={theme}>
                  <SiYoutubegaming size={30} color="#ff0000" />
                </GameLogo>
                <GameHeaderHeading value={theme}>Gaming</GameHeaderHeading>
              </GamingHeader>
              <div>
                <ul className="gaming-un-order">
                  {gamingList.map(eachItem => (
                    <Link
                      to={`/videos/${eachItem.id}`}
                      className="card-navigation-link"
                    >
                      <li key={eachItem.id} className="gaming-list-item">
                        <img
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                          className="gaming-image"
                        />
                        <GamingCardHeading value={theme}>
                          {eachItem.title}
                        </GamingCardHeading>
                        <div className="game-flex-container">
                          <GamingCardDetails value={theme}>
                            {eachItem.viewCount}
                          </GamingCardDetails>
                          <GamingCardDetails value={theme}>
                            Watching Worldwide
                          </GamingCardDetails>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }

  gamingFailureContainer = () => <FailureCard onRetry={this.onRetry} />

  gamingLoaderContainer = () => <LoaderCard />

  gamingResultView = () => {
    const {viewStatus} = this.state
    switch (viewStatus) {
      case viewsList.Success:
        return this.gamingDataContainer()
      case viewsList.Failure:
        return this.gamingFailureContainer()
      case viewsList.InProgress:
        return this.gamingLoaderContainer()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <GamingContainer data-testid="gaming" value={theme}>
                <SideBarCard />
                <div className="gaming-sub-container">
                  {this.gamingResultView()}
                </div>
              </GamingContainer>
            </>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default GamingVideos
