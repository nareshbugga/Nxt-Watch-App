import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarCard from '../SideBarCard'
import SavedContext from '../../SavedVideoContext/SavedContext'
import FailureCard from '../FailureCard'
import LoaderCard from '../LoaderCard'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'
import {
  Name,
  Save,
  Like,
  DisLike,
  Details,
  Subscriber,
  VideoItemContainer,
  VideoItemHeading,
  ChannelDescription,
} from './StyledComponent'

const viewsList = {
  Initial: 'INITIAL',
  Success: 'SUCCESS',
  Failure: 'FAILURE',
  InProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {},
    channelList: {},
    likeStatus: false,
    disLikeStatus: true,
    viewStatus: viewsList.Initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({viewStatus: viewsList.InProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const videoItem = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = videoItem
      const updateVideoItemDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        channel: videoDetails.channel,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      const {channel} = updateVideoItemDetails
      const updateChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
        subscriberCount: channel.subscriber_count,
      }
      this.setState({
        videoItemDetails: updateVideoItemDetails,
        channelList: updateChannel,
        viewStatus: viewsList.Success,
      })
    } else {
      this.setState({viewStatus: viewsList.Failure})
    }
  }

  onLike = () => {
    this.setState({likeStatus: true})
    this.setState({disLikeStatus: true})
  }

  onDisLike = () => {
    this.setState({disLikeStatus: false})
    this.setState({likeStatus: false})
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  videoItemDetailsContainer = () => {
    const {
      videoItemDetails,
      channelList,
      likeStatus,
      disLikeStatus,
    } = this.state
    const {
      id,
      title,
      description,
      publishedAt,
      videoUrl,
      viewCount,
    } = videoItemDetails

    const {name, profileImageUrl, subscriberCount} = channelList

    let updateDate = ''
    if (publishedAt !== undefined) {
      const date = formatDistanceToNow(new Date(publishedAt))
      const dateList = date.split(' ')
      dateList.shift()
      updateDate = dateList.join(' ')
    }

    const likeColor = likeStatus ? '#2563eb' : '#64748b '

    const disLikeColor = disLikeStatus ? '#64748b ' : '#2563eb'

    return (
      <NxtThemeContext.Consumer>
        {Value => {
          const {theme} = Value
          return (
            <SavedContext.Consumer>
              {value => {
                const {updateVideo, savedVideoList} = value
                const saveStatus = savedVideoList.find(
                  eachVideo => eachVideo.id === id,
                )
                const saveText = saveStatus ? 'Saved' : 'Save'
                const saveColor = saveStatus ? '#2563eb' : '#64748b'

                return (
                  <>
                    <ReactPlayer
                      url={videoUrl}
                      width="100%"
                      height="400px"
                      key={id}
                    />
                    <VideoItemHeading value={theme}>{title}</VideoItemHeading>
                    <div className="video-items-container">
                      <div className="flex-container">
                        <Details value={theme}>{viewCount} views</Details>
                        <Details value={theme}>. {updateDate} ago</Details>
                      </div>
                      <div className="flex-container">
                        <div className="flex-button">
                          <button
                            type="button"
                            className="button"
                            onClick={this.onLike}
                          >
                            <div className="logo-flex">
                              <BiLike size={25} color={likeColor} />
                            </div>
                            <Like value={likeStatus}>Like</Like>
                          </button>
                        </div>
                        <div className="flex-button">
                          <button
                            type="button"
                            className="button"
                            onClick={this.onDisLike}
                          >
                            <div className="logo-flex">
                              <BiDislike size={25} color={disLikeColor} />
                            </div>
                            <DisLike value={disLikeStatus}>Dislike</DisLike>
                          </button>
                        </div>
                        <div className="flex-button">
                          <button
                            type="button"
                            className="button"
                            onClick={() => updateVideo(videoItemDetails)}
                          >
                            <div className="logo-flex">
                              <MdPlaylistAdd size={25} color={saveColor} />
                            </div>
                            <Save value={saveStatus}>{saveText}</Save>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="profile-container">
                      <img
                        src={profileImageUrl}
                        alt="channel logo"
                        className="image"
                      />
                      <div>
                        <Name value={theme}>{name}</Name>
                        <Subscriber value={theme}>
                          {subscriberCount} subscribers
                        </Subscriber>
                        <ChannelDescription value={theme}>
                          {description}
                        </ChannelDescription>
                      </div>
                    </div>
                  </>
                )
              }}
            </SavedContext.Consumer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }

  videoItemDetailsFailureContainer = () => (
    <FailureCard onRetry={this.onRetry} />
  )

  videoItemDetailsLoaderContainer = () => <LoaderCard />

  videoItemDetailsResultView = () => {
    const {viewStatus} = this.state
    switch (viewStatus) {
      case viewsList.Success:
        return this.videoItemDetailsContainer()
      case viewsList.Failure:
        return this.videoItemDetailsFailureContainer()
      case viewsList.InProgress:
        return this.videoItemDetailsLoaderContainer()
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
            <VideoItemContainer value={theme} data-testid="videoItemDetails">
              <Header />
              <div className="video-item-container">
                <SideBarCard />
                <div className="video-item-sub-container">
                  {this.videoItemDetailsResultView()}
                </div>
              </div>
            </VideoItemContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
