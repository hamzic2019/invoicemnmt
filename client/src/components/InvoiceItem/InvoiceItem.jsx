import React, {memo} from 'react'
import './InvoiceItem.css'

const InvoiceItem = () => {
  return (
    <div className='invoiceItemWrapper'>
       <div className='item-sorterWrapper-1 item-sorterWrapper-item'>
            <p>#0001</p>
        </div>

        <div className='item-sorterWrapper-2 item-sorterWrapper-item'>
            <p>Zepter International AG</p>
        </div>

        <div className='item-sorterWrapper-3 item-sorterWrapper-item'>
            <p>01.02.2023</p>
        </div>

        <div className='item-sorterWrapper-4 item-sorterWrapper-item'>
            <p style={{color: 'lightgreen'}}>$ 24.422.00</p>
        </div>

    </div>
  )
}

export default memo(InvoiceItem)