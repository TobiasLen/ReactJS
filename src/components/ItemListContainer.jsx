import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const { category } = useParams()

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getProducts().then((products) => setProduct(products))
    }, [])

    const filteredProducts = product.filter((product) => product.category === category)

    return (
        <>
            <ItemList product={filteredProducts} />
        </>
    )
}
export default ItemListContainer
