// import Cookie from 'js-coookie'
import { useState } from "react"
import { Link, useHistory } from 'react-router-dom';

export default function Details(props) {
    const [product, setProduct] = useState(props.location.state);
    // const navigation = useHistory();

    // function comprar() {
    //     let cart = Cookie.get('cart')
    //     cart = cart !== undefined
    //             ? JSON.parse(cart)
    //             : []; 
    
    
    //     if (cart.some(item => item.id === product.id) === false)
    //         cart.push({...product, qtd: 1})


    //     Cookie.set('cart', JSON.stringfy(cart));

    //     navigation.push('/cart')
    // }


    return (
        <div className="Container"> 

                <Link to="/"> Voltar </Link>
            <div> 
                <h1> Details of Product </h1>

                <div> <img src={product.image} alt="" /> </div>
                <div> <h1> {product.title} </h1> </div>
                <div> <h3> {product.price} </h3> </div>
            </div>

            <div>
                <h2> Descrição </h2>
                <div> {product.description} </div>

                <h2> Especificações </h2>
                <div> {product.specifications} </div>

                {/* <div> <button onClick={comprar}> Comprar </button> </div>  */}
            </div>
        </div>
    )
}