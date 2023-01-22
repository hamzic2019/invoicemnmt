import React, {useEffect, memo} from 'react'

const Dashboard = ({setCurrentTab}) => {
    useEffect(() => {
        setCurrentTab('index')
    }, [])

  return (
    <div>Dashboard</div>
  )
}

export default memo(Dashboard)