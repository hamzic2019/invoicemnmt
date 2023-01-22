import React, {memo} from 'react'
import './InvoiceMakeDueDates.css'

const InvoiceMakeDueDates = () => {
  return (
    <div className="makeInvoiceWrapperBodyDates">
                <div className='makeInvoiceWrapperBodyDatesDate'>
                    <p className='makeInvoiceWrapperBodyDatesp'>Date:</p>
                    <input type="date"/>
                </div>
                <div className='makeInvoiceWrapperBodyDatesDueDate'>
                    <p className='makeInvoiceWrapperBodyDatesp'>Due date:</p>
                    <input type="date"/>
                </div>
            </div>
  )
}

export default memo(InvoiceMakeDueDates)
