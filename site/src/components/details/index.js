import { useState } from "react"

export default function Details(props) {
    const [product, setProduct] = useState(props.location.state);

    return (
        <div className="Container"> 
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

                {/* <div> <button onClick={comprar}> Comprar </button> </div> */}
            </div>
        </div>
    )
}