import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { StripeAPIKey } from '../../utils/APIKeys';
const PUBLIC_KEY = StripeAPIKey

const Checkout = (props) => {
    const navigate = useNavigate()
    const [user, token] = useAuth();
    console.log(props.state)
    const userId = props.state.user.id
    const tournamentId = props.state.id

    const postPlayer = async () => {
        const player = {user: userId, tournament_id: tournamentId};
          axios.post('http://127.0.0.1:8000/api/players/', player ,{
            headers: { 
                Authorization: "Bearer " + token,
            },
        });
        }

    const onToken = (token) => {
        console.log(token)
        postPlayer()
        navigate('/')
    }

    return ( 
        <div>
        <StripeCheckout
        token={onToken}
        stripeKey={PUBLIC_KEY}
        
      />
      </div>
     );
}
 
export default Checkout;

// import React, {useState} from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import "./Checkout.css";

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

// const Checkout = (props) => {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement),
//         })

//     if(!error) {
//         try {
//             const {id} = paymentMethod
//             const response = await axios.post("http://localhost:3000/payment", {
//                 amount: 1000,
//                 id
//             })

//             if(response.data.success) {
//                 console.log("Successful Payment")
//                 setSuccess(true)
//             }

//         } catch (error) {
//             console.log("Error", error)
//         }
//     } else {
//         console.log(error.message)
//     }
//     }

//     return ( 
//         <div>
//             {!success ? 
//             <form onSubmit={handleSubmit}>
//                 <fieldset className='FormGroup'>
//                     <div className='FormRow'>
//                         <CardElement options={CARD_OPTIONS}/>
//                     </div>
//                 </fieldset>
//                 <button>Pay</button>
//             </form>
//             : 
//             <div>
//                 <h2>You have successfully registered for the tournament!</h2>
//             </div>
//             }
//         </div>
//      );
// }
 
// export default Checkout;