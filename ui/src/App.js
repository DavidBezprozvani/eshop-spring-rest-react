import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./api"
import { Provider } from "react-redux";
import store from "./store";
import React from "react";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </Provider>
    );
}


export default App;
