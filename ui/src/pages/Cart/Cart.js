import React from "react";
import {TableBody, TableRow, TableHead, Button, TableContainer, Table, TableCell} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {removeProduct} from "../../store/slices/cartSlice";


export default () => {

    const products = useSelector(({cart}) => cart)  // (state) => state.cart
    const dispatch = useDispatch()

    return (

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Product name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((p, i) => (
                            <TableRow key={p.id}>
                                <TableCell align="center">{i + 1}</TableCell>
                                <TableCell align="center">{p.name}</TableCell>
                                <TableCell align="center">{p.price}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained"
                                            color="secondary"
                                            size="small"
                                            onClick={() => dispatch(removeProduct(p.id))}
                                    >Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
