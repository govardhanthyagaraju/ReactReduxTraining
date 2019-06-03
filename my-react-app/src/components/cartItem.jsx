import React, { useState } from 'react';


//Dumb Component or functional components used for Presentation 
function CartItem(props) {
    const [qty, changeQty] = useState(props.item.qty);
    return (
        <tr>
            <td><img src={props.item.productImage} height="200" width="50" className="img-thumbnail" /></td>
            <td>{props.item.productName}</td>
            <td>{props.item.code} {props.item.productPrice}</td>
            <td>
                <input type="number" value={qty} onChange={(e) => {
                    changeQty(e.currentTarget.value)
                    props.notifyChange(e.currentTarget.valueAsNumber)
                }}></input>
            </td>
            <td>{props.item.code} {props.item.productPrice * qty}</td>
        </tr>
    );
}

export default CartItem;