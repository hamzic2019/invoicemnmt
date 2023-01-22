import React, {memo, useState} from 'react'
import './MakeInvoice.css'
import InvoiceBackButton from './../../components/InvoiceBackButton/InvoiceBackButton';
import InvoiceMakeDueDates from '../../components/InvoiceMakeDueDates/InvoiceMakeDueDates';


const MakeInvoice = () => {
  return (
    <div className='makeInvoiceWrapper'>
        <InvoiceBackButton />

        <div className='makeInvoiceWrapperBody'>

            <InvoiceMakeDueDates />

            <div className="makeInvoiceWrapperBodyInvoiceNumber">
                <h1>Invoice#</h1>
                <input type="number" placeholder='0001' />
            </div>
         
        </div>
    </div>
  )
}

export default memo(MakeInvoice)