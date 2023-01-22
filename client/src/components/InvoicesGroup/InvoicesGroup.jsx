import React, {memo} from 'react'
import './InvoicesGroup.css'

import InvoiceItem from './../InvoiceItem/InvoiceItem'

const InvoicesGroup = () => {
  return (
    <div className='invoicesGroupWrapper'>
       <InvoiceItem />
       <InvoiceItem />
    </div>
  )
}

export default memo(InvoicesGroup)