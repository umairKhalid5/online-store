import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../store/cart-slice';
import { useNavigate } from 'react-router-dom';

const DetailsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    if (!cartItems.length) navigate('/categories/all');
  }, [cartItems]);

  return <div>DetailsForm</div>;
};

export default DetailsForm;
