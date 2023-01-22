import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import './InvoiceBackButton.css'

// GoArrowLeft
import { GoArrowLeft } from "react-icons/go";

const InvoiceBackButton = () => {
  return (
    <div className="makeInvoiceBackButton">
            <Link to="/invoices" className='makeInvoiceBackButtonLink'>
                <GoArrowLeft className='makeInvoiceBackButtonLinkIcon' />
            </Link>
        </div>
  )
}

export default memo(InvoiceBackButton)