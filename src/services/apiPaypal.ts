import { CreateOrderData } from "@paypal/paypal-js";

export const apiCreateOrderPaypal = async (data: CreateOrderData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/paypal/api/orders/monthly`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({data})
    })
    const order = await response.json(); // Await the response.json() method call
    return order.id; 
};

export const apiCreateOrderPaypalYear = async (data: CreateOrderData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/paypal/api/orders/annual`, {
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/paypal/checkout/monthly`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'orderId':orderId})
    })
    const details = await response.json(); // Await the response.json() method call
    return details; 
};

export const apiOnApprovePaypalYear = async (orderId:any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/paypal/checkout/annual`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'orderId':orderId})
    })
    const details = await response.json(); // Await the response.json() method call
    return details; 
};
