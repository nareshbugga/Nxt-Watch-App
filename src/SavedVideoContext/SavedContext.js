import React from 'react'

const SavedContext = React.createContext({
  savedVideo: false,
  savedVideoList: [],
  addVideo: () => {},
  removeVideo: () => {},
  updateVideo: () => {},
})

export default SavedContext
