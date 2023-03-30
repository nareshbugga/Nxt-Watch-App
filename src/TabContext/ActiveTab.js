import React from 'react'

const ActiveTab = React.createContext({
  activeTab: 'HOME',
  changeActiveTab: () => {},
})

export default ActiveTab
