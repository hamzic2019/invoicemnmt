import React, {useEffect, memo} from 'react'

const Customers = ({setCurrentTab}) => {
    useEffect(() => {
        setCurrentTab('customers')
    }, [])

  return (
    <div>Customers</div>
  )
}

export default memo(Customers)