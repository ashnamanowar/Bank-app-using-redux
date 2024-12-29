import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch=useDispatch()

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <div className="mb-4">
        <h2>Deposit/Withdraw Money</h2>
      <button className='btn btn-danger mx-5 my-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className='btn btn-success mx-5 my-2'onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
    </div>
  )
}

export default Shop
