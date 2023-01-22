import React, {useEffect} from 'react'

const Customers = ({setCurrentTab}) => {
    useEffect(() => {
        setCurrentTab('customers')
    }, [])
  return (
    <div>Customers</div>
  )
}

export default Customers