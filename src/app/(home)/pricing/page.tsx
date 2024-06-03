"use client";

import { PricingPlan } from "app/components/home/PricingPlan";
import styles from "../../../styles/Pricing.module.scss";
import { useEffect } from "react";
import { PayPalNamespace, loadScript } from "@paypal/paypal-js";
import {  apiCreateOrderPaypal, apiOnApprovePaypal } from "app/services/apiPaypal";

export default function Pricing() {

  let paypal: PayPalNamespace | null;

  const initializePaypal = async () => {
  
    try {
      paypal = await loadScript({ clientId: "test" });
    } catch (error) {
      console.error("failed to load the PayPal JS SDK script", error);
    }

    if (paypal) {
      try {
        if (!paypal.Buttons) {
          console.error("PayPal Buttons is not available");
          return;
        }
        await paypal.Buttons(
         {
          style:{
            shape: 'rect',
            layout: 'vertical',
            color : 'blue',
            label: 'paypal'
          },
        async createOrder(data, actions){
          const orderId = await apiCreateOrderPaypal(data);
          return orderId;
        },
        async onApprove(data, actions){
          const details = await apiOnApprovePaypal(data.orderID);
          console.log(details);
        }
        }).render("#btns-paypal");
      } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
      }
    }
  };

  useEffect(() => {
    initializePaypal();
  }, []);

  const benefitsFree = [
    "Free Upload up to 50 documents",
    "Ilimited translations",
    "20 underlined words per document",
    "Up to 50 flashcards",    
    "Acces to basic grammar exercises",
    "Acces to basic speaking exercises",
  ];

  const benefitsMonth = [
    "Month Upload up to 50 documents",
    "Ilimited flashcards",
    "Ilimited translations",
    "Ilimited underlined words",
    "Acces to all grammar exercises",
    "Acces to all speaking exercises",
  ];

  const benefitsAnnual = [
    "Year Upload up to 50 documents",
    "Ilimited flashcards",
    "Ilimited translations",
    "Ilimited underlined words",
    "Acces to all grammar exercises",
    "Acces to all speaking exercises",
  ];
  return (
    <>
      <h1>Pricing</h1>
      <p className="ST center">Choose a subscription plan that suits your needs.</p>
      <div id="btns-paypal"></div>
      <div className={styles.pricingPlansContainer}>
        <PricingPlan
          benefits={benefitsFree}
          price= "0$ /month"
          name = "Free explorer"
          periodicity= "No payment"
          cardTypeRecommended={false}
        />
        <PricingPlan
          benefits={benefitsMonth}
          name = "Monthly Voyager"
          price={"7$ /month"}
          periodicity={"Montly payment"}
          cardTypeRecommended={true}
        />
        <PricingPlan
          benefits={benefitsFree}
          name = "Annual Odyssey"
          price={"70$ /year"}
          periodicity={"Annual payment"}
          cardTypeRecommended={false}
        />
      </div>
    </>
  );
}
