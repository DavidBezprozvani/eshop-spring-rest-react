
import PropTypes from 'prop-types';
import {TableBody, TableRow, TableHead, Button, TableContainer, Table, TableCell, Link} from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import { addProduct }  from "../../store/slices/cartSlice";


function ProductsTable ({ addProduct, products, handleDeleteClick }) {

    return (

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Product name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">In Stock</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"/>
                        <TableCell align="center"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(p => (
                            <TableRow key={p.id}>
                                <TableCell align="center">{p.id}</TableCell>
                                <TableCell align="center"><Link to={`/products/${p.id}`}>{p.name}</Link></TableCell>
                                <TableCell align="center">{p.description}</TableCell>
                                <TableCell align="center">{p.inStock}</TableCell>
                                <TableCell align="center">{p.price}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained"
                                            color="secondary"
                                            size="small"
                                            onClick={() => handleDeleteClick(p.id)}>Delete</Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained"
                                            color="primary"
                                            size="small"
                                            onClick={() => addProduct({
                                                id: p.id,
                                                name: p.name,
                                                price: p.price
                                            })}>Add</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

ProductsTable.prototype = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inStock: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    addProduct: PropTypes.func
}


const mapDispatchToProps = {
    addProduct
}

export default connect(null, mapDispatchToProps)(ProductsTable);