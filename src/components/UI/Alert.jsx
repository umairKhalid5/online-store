import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Alert = () => {
  const dispatch = useDispatch();

  const msg = useSelector(state => state.ui.alertMsg);
  const showAlert = useSelector(state => state.ui.showAlert);
  const type = useSelector(state => state.ui.alertType);

  // console.log(msg, showAlert);

  const classes = `${
    type === 'info'
      ? 'text-sky-400'
      : type === 'success'
      ? 'text-green-400'
      : type === 'error'
      ? 'text-red-400'
      : ''
  }`;

  const icon =
    type === 'info' ? (
      <InfoOutlinedIcon />
    ) : type === 'success' ? (
      <CheckCircleOutlineIcon />
    ) : type === 'error' ? (
      <ErrorOutlineOutlinedIcon />
    ) : (
      ''
    );

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => {
      dispatch(
        uiSliceActions.toggleAlert({
          msg: '',
          alertType: '',
        })
      );
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [msg, showAlert]);

  return (
    // <div
    //   className={`fixed ${
    //     msg.trim() && showAlert ? 'top-5' : '-top-[120%]'
    //   } left-[50%] -translate-x-[50%] w-[98%] flex items-center justify-center gap-1 px-3 py-3 rounded-lg text-green-400 z-[100] bg-gray-800/90 transition-all duration-500 sm:px-14 sm:w-max sm:gap-3`}
    // >
    <div
      className={`${classes} fixed top-5 left-[50%] -translate-x-[50%] w-[98%] flex items-center justify-center gap-1 px-3 py-3 rounded-lg z-[100] bg-gray-800/90 transition-all duration-500 sm:px-14 sm:w-max sm:gap-3`}
    >
      {icon}
      <p className="text-lg font-medium">{msg}</p>
    </div>
  );
};

export default Alert;
