import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Product({user}){

    const {productId} = useParams()
    const [product, setProduct] = useState(null)
    console.log(user);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(json => setProduct(json))
        .catch(err => console.error(err))
        console.log(productId);
        console.log(product);
    },[productId])

    if (!product) {
        return <></>
    }

    return (
        <>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" className="w-100 img-thumbnail" />
            <p>
                {product?.description}
            </p>
        </>
    )
}