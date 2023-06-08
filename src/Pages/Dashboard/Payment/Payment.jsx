
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from "@stripe/react-stripe-js"
import Checkout from '../Checkout/Checkout';
import useCart from '../../../Hooks/useCart';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price ,0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subheading={"Please Process"} heading={"Payment"}></SectionTitle>
            <h2 className='text-3xl'> Teka o teka tumi uira uira aso</h2>

            <Elements stripe={stripePromise}>
                <Checkout price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;