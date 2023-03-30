import './index.css'
import Loader from 'react-loader-spinner'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'

const LoaderCard = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {theme} = value
      const loaderColor = theme ? '#ffffff' : '#0f0f0f'
      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
        </div>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default LoaderCard
