import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Mil2TAangOGbZBRGyegnO7W400CwlMG6Wi';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Kup teraz'
      name='PROS'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Wartość zamówienia: ${price}zł`}
      amount={priceForStripe}
      panelLabel='Zapłać'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
