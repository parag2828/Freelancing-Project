import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

// Pro-tip: Use your .env file for the public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "your_public_key_here");

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.error("Payment Intent Error:", err);
      }
    };
    makeRequest();
  }, [id]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    /* Standardized padding and centering to match your other pages */
    <div className="flex justify-center py-[100px]">
      <div className="w-[1400px] px-4 flex justify-center">
        {clientSecret ? (
          <div className="w-full max-w-[600px] bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        ) : (
          <div className="text-gray-400 animate-pulse">
            Processing secure payment intent...
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;