import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let totalSalary = 0;
    let addName = [];
    for(const minister of cart) {
        if(!minister.quantity) {
            minister.quantity = 1;
        }
        totalQuantity = totalQuantity + minister.quantity;
        totalSalary = totalSalary + minister.quantity * minister.salary;
        addName.push(minister.name, <br />);
    }

    return (
        <div className="card mt-4 ms-2 sticky-top cart">
            
            <div className="card-body">
                <h4 className="card-title">Employee Selected: {totalQuantity}</h4>
                <h5 className="card-title">Total Cost: {totalSalary}</h5>
                <button type="button" class="btn btn-dark">Pay Now</button>      
            </div>
        </div>
    );
};

export default Cart;