import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import TrendingVideoCardItem from '../TrendingVideoCardItem'
import Header from '../Header'
import SideBarCard from '../SideBarCard'
import FailureCard from '../FailureCard'
import LoaderCard from '../LoaderCard'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'

import {
  TrendingHeader,
  FireLogo,
  TrendingContainer,
  TrendingHeaderHeading,
} from './StyledComponent'

const viewsList = {
  Initial: 'INITIAL',
  Success: 'SUCCESS',
  Failure: 'FAILURE',
  InProgress: 'IN_PROGRESS',
}
class TrendingVideos extends Component {
  state = {trendingVideoList: [], viewStatus: viewsList.Initial}

  componentDidMount() {
    this.getTrendingVideoDetails()
  }

  getTrendingVideoDetails = async () => {
    this.setState({viewStatus: viewsList.InProgress})
    const token = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updateTrendingVideoDetails = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channel: eachVideo.channel,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideoList: updateTrendingVideoDetails,
        viewStatus: viewsList.Success,
      })
    } else {
      this.setState({viewStatus: viewsList.Failure})
    }
  }

  onRetry = () => {
    this.getTrendingVideoDetails()
  }

  trendingDataContainer = () => {
    const {trendingVideoList} = this.state

    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <TrendingHeader value={theme} data-testid="banner">
                <FireLogo value={theme}>
                  <AiFillFire size={30} color="#ff0000" />
                </FireLogo>
                <TrendingHeaderHeading value={theme}>
                  Trending
                </TrendingHeaderHeading>
              </TrendingHeader>
              <div>
                <ul className="trending-un-order">
                  {trendingVideoList.map(eachVideoItem => (
                    <TrendingVideoCardItem
                      eachVideoItem={eachVideoItem}
                      key={eachVideoItem.id}
                    />
                  ))}
                </ul>
              </div>
            </>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }

  trendingFailureContainer = () => <FailureCard onRetry={this.onRetry} />

  trendingLoaderContainer = () => <LoaderCard />

  trendingResultView = () => {
    const {viewStatus} = this.state
    switch (viewStatus) {
      case viewsList.Success:
        return this.trendingDataContainer()
      case viewsList.Failure:
        return this.trendingFailureContainer()
      case viewsList.InProgress:
        return this.trendingLoaderContainer()
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
              <TrendingContainer data-testid="trending" value={theme}>
                <Header />
                <div className="trending-container">
                  <SideBarCard />
                  <div className="trending-sub-container">
                    {this.trendingResultView()}
                  </div>
                </div>
              </TrendingContainer>
            </>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
