// import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID qeVa8iaJe8B91_oGEYKSGPJ7_3LJOKcFBEqV9DsRgbs'
    },

}
);
