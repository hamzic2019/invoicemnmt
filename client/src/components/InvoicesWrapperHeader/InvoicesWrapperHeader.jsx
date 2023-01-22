import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import './InvoicesWrapperHeader.css'

const InvoicesWrapperHeader = () => {
  return (
    <div className="invoicesWrapper-header">
        <h3>Invoices</h3>
        <div className="invoicesWrapper-header-right">
        <Link to="/invoices/new" className='invoices-link'>Create New</Link>
        </div>
    </div>
  )
}

export default memo(InvoicesWrapperHeader)