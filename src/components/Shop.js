import React from 'react';
import './Shop.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <div className="container">
        <h2 className="my-3">Manage Your Funds</h2>
        <div className="button-group">
          <button className="btn btn-success mx-3 my-3" onClick={() => { withdrawMoney(100); }}>
          <i class="fa-solid fa-minus"></i>
          </button>
          <span className="balance-text">Manage Balance</span>
          <button className="btn btn-success mx-3 my-3" onClick={() => { depositMoney(100); }}>
          <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <h1>Your Current Balance is {balance} Rs</h1>
      <p class="app-description">
  Welcome to BankApp, a simple yet effective application designed for learning and
  experimenting with React and Redux. This app allows you to deposit and withdraw money,
  view your current balance, and see your transaction history. Built using React for the 
  front end and Redux for state management, it demonstrates the
  power of Redux in managing application state seamlessly. 
  With a vibrant contrast of colors inspired by parrot green, 
  this app provides an engaging and visually appealing user experience. 
  <span class="highlight">Created by Abdul Raheem</span>
</p>



    </div>
  );
};

export default Shop;
