import React from "react";
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {fetchSingleProduct} from "../../api/productApi";
import Loader from "../Common/Loader";
import ProductCard from "./ProductCard";

export default () => {

    const {id} = useParams();
    const {isLoading, setIsLoading} = useState(true)
    const {product, setProduct} = useState();

    useEffect(() => {
        fetchSingleProduct(id)
            .then(response => {
                setProduct(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    return (

        <>
            {isLoading && <Loader/>}
            {isLoading && <ProductCard product={product}/>}

        </>

    )
}