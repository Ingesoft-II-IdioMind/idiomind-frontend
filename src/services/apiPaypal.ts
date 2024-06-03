import { CreateOrderData } from "@paypal/paypal-js";

export const apiCreateOrderPaypal = async (data: CreateOrderData) => {
    const response = await fetch('https://api.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data})
    })
    const order = await response.json(); // Await the response.json() method call
    return order.id; 
};

export const apiOnApprovePaypal = async (orderId:any) => {
    const response = await fetch('https://api.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'orderId':orderId})
    })
    const details = await response.json(); // Await the response.json() method call
    return details; 
};
