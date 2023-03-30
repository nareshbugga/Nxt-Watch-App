import {AiOutlineClose} from 'react-icons/ai'
import './index.css'

const BannerCard = props => {
  const {onClose, bannerShow} = props
  const onCloseButton = () => {
    onClose()
  }
  return (
    <>
      {bannerShow ? (
        <div data-testid="banner">
          <div className="banner-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
              className="logo"
            />
            <button
              type="button"
              className="close-button"
              onClick={onCloseButton}
              data-testid="close"
            >
              <AiOutlineClose size={25} />
            </button>
          </div>
          <p className="banner-description">
            Buy Nxt Watch Premium prepaid plans with UPI
          </p>
          <button type="button" className="get-it-now">
            GET IT NOW
          </button>
        </div>
      ) : null}
    </>
  )
}

export default BannerCard
