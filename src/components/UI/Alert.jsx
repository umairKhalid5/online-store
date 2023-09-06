import React, { useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import { shoes } from '../../constants/constants';

const Alert = () => {
  const dispatch = useDispatch();

  const msg = useSelector(state => state.ui.alertMsg);
  const showAlert = useSelector(state => state.ui.showAlert);

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => {
      dispatch(uiSliceActions.toggleAlert(''));
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [msg, showAlert]);

  return (
    <div
      className={`fixed ${
        msg.trim() && showAlert ? 'top-5' : '-top-[120%]'
      } left-[50%] -translate-x-[50%] w-[98%] flex items-center justify-center gap-1 px-3 py-3 rounded-lg text-green-400 z-[100] bg-gray-800/90 transition-all duration-500 sm:px-14 sm:w-max sm:gap-3`}
    >
      <p>Item {msg} the cart!</p>
      <CheckCircleOutlineIcon />
    </div>
  );
};

export default Alert;
