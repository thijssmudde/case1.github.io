import React from 'react'

// Sets document.title
const withPathName = (Component, title) => ({...props}) => {
  React.useEffect(() => {
    document.title = `Kamermaatje - ${title}`
  }, [])

  return <Component {...props} />
} 

export default withPathName