import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Minister from '../Minister/Minister';
import "./Ministers.css"

const Ministers = () => {
    const [ministers, setMinisters] = useState([]);

    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        fetch('./ministers.JSON')
            .then(res => res.json())
            .then(data => setMinisters(data));
    },[])

    const handlerCart = minister => {
        const newAdded = [...cart, minister];
        setCart(newAdded);
    }

    return (
        <div className="ministers-container">
            <div className="minister-container">
                <div className="row">
                    
                    {
                        ministers.map(minister =>
                            <Minister
                                key={minister.id}
                                minister={minister}
                                handlerCart ={handlerCart}
                            ></Minister>)
                        
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart
                    cart ={cart}
                ></Cart>
            </div>
          
        </div>
    );
};

export default Ministers;