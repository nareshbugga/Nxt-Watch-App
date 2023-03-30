import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {TrendingCardHeading, TrendingCardDetails} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'

const TrendingVideoCardItem = props => {
  const {eachVideoItem} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = eachVideoItem
  const date = formatDistanceToNow(new Date(publishedAt))
  const dateList = date.split(' ')
  dateList.shift()
  const publishDate = dateList.join(' ')

  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`/videos/${id}`} className="card-navigation-link">
            <li className="flex-list-container">
              <div>
                <img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  className="trending-card-image"
                />
              </div>
              <div>
                <TrendingCardHeading value={theme}>{title}</TrendingCardHeading>
                <TrendingCardDetails value={theme}>
                  {channel.name}
                </TrendingCardDetails>
                <div className="details-flex-container">
                  <TrendingCardDetails value={theme}>
                    {viewCount} views
                  </TrendingCardDetails>
                  <TrendingCardDetails value={theme}>
                    . {publishDate} ago
                  </TrendingCardDetails>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default TrendingVideoCardItem
