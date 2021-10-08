import { useState } from "react"
import Product from '../product'

export default function Home () {
    const [product,setProduct] = useState([]); 
    
    function list() {
        const ListProduct = [
            {
                id: 200, 
                image: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                title: "PC Gamer",
                price: "R$ 12.584,00",
                description: "With this product wiil you become more happy",
                specifications: "This product id of great quality, you will never regret"    
            },
            {
                id: 201, 
                image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                title: "Gamer armchair",
                price: "R$ 1.350,00",
                description: "With this product wiil you become more happy",
                specifications: "This product id of great quality, you will never regret"  

            },
            {
                id: 203, 
                image: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                title: "Gamer keyboard",
                price: "R$ 680,00",
                description: "With this product wiil you become more happy",
                specifications: "This product id of great quality, you will never regret"  

            }
        ]   
        
        setProduct(ListProduct);
    }


    return (
        <div className= "Container"> 
            <h1> Sejam bem-vindos! </h1>

            <button onClick={list}> Listar </button> 

            <div className = "ProductList"> 

                {product.map(item => 
                    <Product info={item} /> 
                )}
                
            </div>
        </div>   
    )

     

}