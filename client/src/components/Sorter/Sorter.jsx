import React, {memo} from 'react'
import './Sorter.css'

const Sorter = () => {
  return (
    <div className='sorterWrapper'>
        <div className='sorterWrapper-1 sorterWrapper-item'>
            <p>Invoice No.</p>
        </div>

        <div className='sorterWrapper-2 sorterWrapper-item'>
            <p>Client name</p>
        </div>

        <div className='sorterWrapper-3 sorterWrapper-item'>
            <p>Date</p>
        </div>

        <div className='sorterWrapper-4 sorterWrapper-item'>
            <p>Amount</p>
        </div>
    </div>
  )
}

export default memo(Sorter)