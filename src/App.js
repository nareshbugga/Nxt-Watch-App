/* eslint-disable no-unused-vars */
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoCardItemDetails from './components/VideoCardItemDetails'
import SavedContext from './SavedVideoContext/SavedContext'
import ActiveTab from './TabContext/ActiveTab'
import ProtectedRoute from './components/ProtectedRoute'
import NxtThemeContext from './NxtThemeContext/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    theme: false,
    savedVideo: false,
    savedVideoList: [],
    activeTab: 'HOME',
  }

  addVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, videoDetails],
    }))
  }

  removeVideo = videoDetails => {
    const {savedVideoList} = this.state
    const updateList = savedVideoList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )
    this.setState({savedVideoList: updateList})
  }

  updateSavedList = videoDetails => {
    const {savedVideo} = this.state
    if (savedVideo) {
      this.addVideo(videoDetails)
    } else {
      this.removeVideo(videoDetails)
    }
  }

  updateVideo = videoItemDetails => {
    this.setState(prevState => ({savedVideo: !prevState.savedVideo}))
    this.updateSavedList(videoItemDetails)
  }

  changeActiveTab = value => {
    this.setState({activeTab: value})
  }

  changeTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  render() {
    const {theme, savedVideo, savedVideoList, activeTab} = this.state

    return (
      <NxtThemeContext.Provider value={{theme, changeTheme: this.changeTheme}}>
        <ActiveTab.Provider
          value={{activeTab, changeActiveTab: this.changeActiveTab}}
        >
          <SavedContext.Provider
            value={{
              savedVideo,
              savedVideoList,
              addVideo: this.addVideo,
              removeVideo: this.removeVideo,
              updateVideo: this.updateVideo,
            }}
          >
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute
                exact
                path="/trending"
                component={TrendingVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoCardItemDetails}
              />
              <ProtectedRoute exact path="/gaming" component={GamingVideos} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </SavedContext.Provider>
        </ActiveTab.Provider>
      </NxtThemeContext.Provider>
    )
  }
}
export default App
