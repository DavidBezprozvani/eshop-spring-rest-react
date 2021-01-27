import React from 'react';
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../api/productApi";
import ProductsTable from "./ProductsTable";
import Button from "@material-ui/core/button";
import { useTranslation } from "react-i18next";
import Loader from "../Common/Loader";
import useUser from "../../hooks/useUser";


const Products = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { t } = useTranslation('products')
    const user = useUser()



    useEffect(() => {
        loadAllProduct();
    }, [])


    const loadAllProduct = () => {
        setIsLoading(true);
        fetchProducts().then(response => {
            setProducts(response.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const handleDeleteClick = (id) => {
        setIsLoading(true);

        deleteProduct(id)
            .then(() => {
                loadAllProduct();
            })
    }


    return (
        <>
            <h1>{t('totalProducts', { total: products.length })}</h1>
            {
                user?.roles.includes('ADMIN') && (
                    <Link to="/products/new">
                        <Button variant="outlined" color="secondary" type="button">Create product</Button>
                    </Link>
                )
            }

            {
                isLoading ?
                    <Loader />
                     :
                   <ProductsTable
                       products={products}
                       handleDeleteClick={handleDeleteClick}
                   />
            }
        </>
    )
}

Products.displayName = "Products"

export default Products