import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';


const Checkout = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth()
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if( !stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent);


        if(error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setCardError('')
        }
    }
    return (
        <div>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-base btn-sm mt-6' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
        </div>
    );
};

export default Checkout;