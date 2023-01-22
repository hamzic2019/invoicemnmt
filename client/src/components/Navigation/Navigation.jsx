import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

// icons
import {TbLayoutDashboard, TbFileInvoice, TbUsers, TbLogout} from 'react-icons/tb'

const Navigation = ({setCurrentTab, currentTab}) => {
  return (
    <div className='navigationWrapper'>
        <h1>Invoice MNMT</h1>
        <Link className={currentTab === 'index' ? 'link navigationWrapper-active': 'link'} to="/"><TbLayoutDashboard style={{marginRight: '5px', fontSize: '30px'}}/> Dashboard</Link>
        <Link className={currentTab === 'invoices' ? 'link navigationWrapper-active': 'link'} to="/invoices"><TbFileInvoice  style={{marginRight: '5px', fontSize: '30px'}}/> Invoices</Link>
        <Link className={currentTab === 'customers' ? 'link navigationWrapper-active': 'link'} to="/customers" ><TbUsers style={{marginRight: '5px', fontSize: '30px'}}/>Customers</Link>
        <Link className={currentTab === 'logout' ? 'link bottom navigationWrapper-active': 'link bottom'} to="/logout"><TbLogout style={{marginRight: '5px', fontSize: '30px'}}/> Logout</Link>
    </div>
  )
}

export default memo(Navigation)