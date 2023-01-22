import React, {useEffect} from 'react'

const Invoices = ({setCurrentTab}) => {
    useEffect(() => {
        setCurrentTab('invoices')
    }, [])
  return (
    <div>Invoices</div>
  )
}

export default Invoices