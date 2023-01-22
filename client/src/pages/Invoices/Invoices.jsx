import React, {memo, useEffect} from 'react'
import {Link} from 'react-router-dom';
import InvoicesGroup from '../../components/InvoicesGroup/InvoicesGroup'
import InvoicesWrapperHeader from '../../components/InvoicesWrapperHeader/InvoicesWrapperHeader';
import Sorter from '../../components/Sorter/Sorter'
import './Invoices.css'

const Invoices = ({setCurrentTab}) => {
    useEffect(() => {
        setCurrentTab('invoices')
    }, [])

  return (
    <div className='invoicesWrapper'>
      <InvoicesWrapperHeader />  

      <Sorter />

      <InvoicesGroup />

    </div>
  )
}

export default memo(Invoices)