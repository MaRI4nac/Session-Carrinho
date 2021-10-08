import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CartItem(props) {
    const { cart, setCart } = useState(props.info)

    f

    return (
        <div className="Container">

            <h1> Carrinho </h1>
            <Link to= "/"> Voltar </Link>

        <div className="Square"> 
            <div> <img src={cart.image}/></div>

            <div className="Menu"> 
                <div> {cart.title} </div>
                <div>  
                    <div> Preço Unitário </div>
                    <div> {cart.price} </div>

                </div>
            </div>

        </div>
            

        
        </div>
    )
}