import './FinalCheckout.css';
import StripeContainer from '../../components/Checkout/StripeContainer';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FinalCheckout = () => {
    const [showItem, setShowItem] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state.id)

    return ( 
        <div className='paymentpagecontainer'>
            {showItem ? 
                <div className='prepaymentcontainer'>
                    <div className='prepaymentcheck1'>
                    <h1 className='paytitle1'>Click to Pay</h1>
                    <StripeContainer state={location.state}/> 
                    </div>
                </div>
                : 
                <div className='prepaymentcontainer'> 
                    <div className='prepaymentcheck'>
                        <h2 className='paytitle'>{location.state.name}</h2> 
                        <div className='white'>Final Cost: $45</div>
                        <h2 className='paytitle'>Location</h2>
                        <div className='white1'>{location.state.address.house_number} {location.state.address.street_name} {location.state.address.street_type}</div>
                        <div className='white2'>{location.state.address.city}, {location.state.address.state} {location.state.address.zip_code}</div>
                        <img width = '200rem' src='GettyImages-1373009126-1200x779.jpg'></img> 
                        <button className='paybutton' onClick={() => setShowItem(true)}>Pay</button>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default FinalCheckout;