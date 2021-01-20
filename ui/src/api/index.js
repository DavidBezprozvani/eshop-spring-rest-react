import React from 'react';
import axios from 'axios';


const HTTP = axios.create({
    baseURL: '/api'
})

export {HTTP as default}