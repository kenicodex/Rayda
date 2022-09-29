import React from 'react';
import { PaystackButton } from 'react-paystack';


export function Checkout(props) {

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "kehindesalaudeen222@gmail.com",
    amount: props.total * 100,
    publicKey: 'pk_test_c9901fe1df9d82daa2b3f646e3c84af784d3961c',
  };
  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
  };


  const handlePaystackCloseAction = () => {
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'ORDER',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
    style:{ opacity: 0 },
    className:'checkout'
  };

  return <PaystackButton {...componentProps} />


}