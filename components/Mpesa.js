import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function STKPushButton() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer 9x2Ho6oM5ZR1z3I0lBb1zAxiUpjH");

    try {
      const response = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
        method: 'POST',
        headers,
        body: JSON.stringify({
          "BusinessShortCode": 174379,
          "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwMTE4MDcxNTE5",
          "Timestamp": "20230118071519",
          "TransactionType": "CustomerPayBillOnline",
          "Amount": 1,
          "PartyA": phoneNumber,
          "PartyB": 174379,
          "PhoneNumber": phoneNumber,
          "CallBackURL": "https://gutheria.com/knowledge",
          "AccountReference": "GutheriaLLC",
          "TransactionDesc": "garbage" 
        })
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Enter phone number" onChange={(e) => setPhoneNumber(e.target.value)}/>
      </div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Send STK Push
      </Button>
    </>)