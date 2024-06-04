"use client";
import { PayPalNamespace, loadScript } from "@paypal/paypal-js";
import { apiCreateOrderPaypal, apiCreateOrderPaypalYear, apiOnApprovePaypal, apiOnApprovePaypalYear } from "app/services/apiPaypal";
import { useEffect } from "react";

export default function Monthly() {
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
            console.log("DATA",data)
            const orderId = await apiCreateOrderPaypalYear(data);
            console.log(orderId); 
            // toast.success("Payment completed successfully");
            return orderId;
          },
          async onApprove(data, actions){
            const details = await apiOnApprovePaypalYear(data.orderID);
            // toast.success("Payment completed successfully");
            // console.log("DETAILS",details);
          }
          }).render("#btns-paypal");
        } catch (error) {
          console.error("failed to render the PayPal Buttons", error);
          // toast.success("Payment completed successfully");
        }
        // toast.success("Payment completed successfully");
      }
    };

    useEffect(() => {
        initializePaypal();
      }, []);
    
    return (
        <main>
      <h1>Pay yearly subscription</h1>
      <div style={{justifyContent:"center", display:"flex", width:"100%"}}>
         <div id="btns-paypal" ></div>
      </div>
     
      </main>
    );
  }
  