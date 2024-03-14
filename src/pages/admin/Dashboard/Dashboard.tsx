import React from 'react'
import { ENUMFORROUTES } from '../../../interfaces/interface'
import { useNavigate } from 'react-router-dom'
/**
 * Dashboard Component
 * @returns {JSX.Element} JSX element representing the Dashboard component
 */

const Dashboard = (props) => {
  const navigate=useNavigate();
  return (
    <>
    <div>Dashboard</div>
    <button onClick={()=>{navigate(ENUMFORROUTES.USER_MANGEMNET);}}>userMangement</button>


    </>
  )
}

export default Dashboard
