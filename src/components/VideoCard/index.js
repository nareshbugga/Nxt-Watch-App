import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {CardHeading, MatchName, DetailsDescription} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'

const VideoCard = props => {
  const {eachVideoData} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = eachVideoData
  const date = formatDistanceToNow(new Date(publishedAt))
  const dateList = date.split(' ')
  dateList.shift()
  const updateDate = dateList.join(' ')

  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`/videos/${id}`} className="card-navigation-link">
            <li className="list-item">
              <div>
                <img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  className="thumbnailUrl"
                />
              </div>
              <div className="profile-container">
                <img
                  src={channel.profile_image_url}
                  alt="channel logo"
                  className="profile-image"
                />
                <div>
                  <CardHeading value={theme}>{title}</CardHeading>
                  <MatchName value={theme}>{channel.name}</MatchName>
                  <div className="description-container">
                    <DetailsDescription value={theme}>
                      {viewCount} views
                    </DetailsDescription>
                    <DetailsDescription value={theme}>
                      . {updateDate} ago
                    </DetailsDescription>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default VideoCard
