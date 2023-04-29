import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button';

import axios from "axios";

function CartDropdown({cartItems, total}) {
  console.log(cartItems)
  
  const buy = async () =>{

    try {
        const resp = await axios.post(`http://localhost:3030/sales`
        , { cartItems

        },
        {
            withCredentials:true, 
            headers:{
                'Content-Type': 'application/json'
            }
        }
        )
    alert(await resp.data.msg)
    }
    catch (e){
        console.log(e.response.data.msg)
    }

    //cartItems should be reset to 0
  }
    

  if (!cartItems) {
    return (
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        Your Cart
      </Dropdown.Toggle>

      <Dropdown.Menu>
  
      </Dropdown.Menu>
    </Dropdown>
    )
  }else{
  return (
    <Dropdown className="d-flex justify-content-end">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="align-items-end" >
        Your Cart <Badge>{cartItems.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          cartItems.map(item=>{
  
            return (
                <Dropdown.Item  key={item.id}>
                    <p>Item: {item.title} Price: ${item.price}</p>
                   
                         
                </Dropdown.Item>
            )
        }
        )
        }
        <Dropdown.Item href="#/action-3">Total: ${total}</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><Button onClick={()=>buy()}>Pay</Button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
}

export default CartDropdown;