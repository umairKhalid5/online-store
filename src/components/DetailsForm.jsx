import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartSliceActions } from '../store/cart-slice';
import useForm from '../hooks/use-form';
import { sendOrder } from '../store/cart-actions';
import { uiSliceActions } from '../store/ui-slice';

const emailValidStr =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const DetailsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const isOrdered = useSelector(state => state.cart.isOrdered);

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: phoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    inputChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useForm(
    value => value.trim() !== '' && value.length > 4 && Number.isInteger(+value)
  );

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useForm(value => value.match(emailValidStr));

  const {
    value: address,
    isValid: addressIsValid,
    hasError: addressHasError,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useForm(value => value.trim() !== '' && value.length > 3);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: zipCode,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    inputChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    phoneNumberIsValid &&
    emailIsValid &&
    addressIsValid &&
    cityIsValid &&
    zipCodeIsValid
  )
    formIsValid = true;

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      !firstNameIsValid && firstNameBlurHandler();
      !lastNameIsValid && lastNameBlurHandler();
      !phoneNumberIsValid && phoneNumberBlurHandler();
      !emailIsValid && emailBlurHandler();
      !addressIsValid && addressBlurHandler();
      !cityIsValid && cityBlurHandler();
      !zipCodeIsValid && zipCodeBlurHandler();
      return;
    }

    const orderData = {
      orderDetails: {
        items: cartItems,
        totalPrice,
        totalQuantity,
      },
      shippingDetails: {
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        city,
        zipCode,
      },
    };

    dispatch(sendOrder(orderData));

    if (isOrdered) {
      resetFirstName();
      resetLastName();
      resetPhoneNumber();
      resetEmail();
      resetAddress();
      resetCity();
      resetZipCode();
    }
  };

  useEffect(() => {
    if (!cartItems.length) navigate('/categories/all');
  }, [cartItems]);

  return (
    <div className="w-full py-5 px-3 max-w-7xl mx-auto">
      <form onSubmit={submitHandler} className="form">
        <div className="flex flex-col space-y-5">
          <h4 className="text-orange-600 text-2xl font-medium">
            Shipping INFORMATION
          </h4>
          {/* Inputs Container */}
          <div className="text-black flex flex-col space-y-3 items-center justify-between">
            {/* Row-1 */}
            <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
              {/* Input 1 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="f-name">
                  First Name <span>*</span>
                </label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                  <p className="text-red-500 text-sm">
                    First name must be at least 2 characters!
                  </p>
                )}
              </div>
              {/* Input 2 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="l-name">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="l-name"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameHasError && (
                  <p className="text-red-500 text-sm">
                    Last name must be at least 2 characters!
                  </p>
                )}
              </div>
            </div>

            {/* Row-2 */}
            <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
              {/* Input 3 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={phoneNumberChangeHandler}
                  onBlur={phoneNumberBlurHandler}
                />
                {phoneNumberHasError && (
                  <p className="text-red-500 text-sm">
                    Phone number must be a string of at least 5 numbers!
                  </p>
                )}
              </div>
              {/* Input 4 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailHasError && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email address
                  </p>
                )}
              </div>
            </div>

            {/* Row-3 */}
            <div className="flex flex-col space-y-1 flex-1 w-full">
              <label htmlFor="address">
                Address <span>*</span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressHasError && (
                <p className="text-red-500 text-sm">
                  Please enter a valid address
                </p>
              )}
            </div>

            {/* Last Row */}
            <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
              {/* Input 1 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={city}
                  onChange={cityChangeHandler}
                  onBlur={cityBlurHandler}
                />
                {cityHasError && (
                  <p className="text-red-500 text-sm">
                    Please enter your city name
                  </p>
                )}
              </div>
              {/* Input 2 */}
              <div className="flex flex-col space-y-1 flex-1">
                <label htmlFor="z-code">
                  Zip Code <span>*</span>
                </label>
                <input
                  type="text"
                  id="z-code"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={zipCodeChangeHandler}
                  onBlur={zipCodeBlurHandler}
                />
                {zipCodeHasError && (
                  <p className="text-red-500 text-sm">
                    Please enter your zip code
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reserve Now Button */}
        <div className="rounded-md py-6 pb-12 w-full flex mt-2 justify-end">
          <button
            // disabled={!formIsValid}
            className="btn w-full sm:w-auto"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
