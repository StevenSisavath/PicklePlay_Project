import React from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import { StripeAPIKey } from '../../utils/APIKeys';

const PUBLIC_KEY = StripeAPIKey

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = (props) => {


    return ( 
        <Elements stripe={stripeTestPromise}>
            <Checkout state={props.state}/>
        </Elements>
     );
}
 
export default StripeContainer;