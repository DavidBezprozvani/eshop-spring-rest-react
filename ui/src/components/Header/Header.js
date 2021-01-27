import {CssBaseline, Badge, Button, AppBar, makeStyles, Toolbar, Typography, IconButton, Link} from "@material-ui/core";
import {NavLink, Link as RouterLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect, useDispatch, useSelector} from "react-redux";
import React from "react";
import LangSwitcher from "./LangSwitcher";
import {removeJwt, removeUserData} from "../../store/slices/userSlice";
import useUser from "../../hooks/useUser";



const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));
const Header = () => {
    const classes = useStyles()
    const productCount = useSelector(state => state.cart.length)
    const user = useUser()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(removeJwt())
        dispatch(removeUserData())
    }

    return (
        <>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Eshop
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" className={classes.link} component={NavLink} to="/products">Products</Link>
                        <Link variant="button" color="textPrimary" className={classes.link} component={NavLink} to="/about">About</Link>
                        {
                            !!user ? (
                                <>
                                <span>{`Ahoy ${user.name} ${user.surname}!`}</span>
                                <Button color="textPrimary" color="secondary" className={classes.link} onClick={logout} >Logout</Button>
                                </>
                            ) : (
                            <Button color="secondary" className={classes.link} component={NavLink} to="/login">Login</Button>
                            )
                        }

                        <RouterLink to="/cart">
                            <IconButton aria-label="cart">
                                <Badge badgeContent={productCount} color="secondary">
                                    <ShoppingCartIcon/>
                                </Badge>
                            </IconButton>
                        </RouterLink>
                        <LangSwitcher/>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header