/*
Imports
*/
    // Node
    const express = require('express');
//

/*  
Routes definition
*/
    class RouterClass {
        constructor( { connection } ){
           this.router = express.Router();
           this.connection = connection;
        }

        routes(){
            // Main API route definition
            this.router.get('/', ( req, res ) => {
                // TODO: add the API definition
                return res.json( {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'API Home page',
                    data: null,
                    err: null
                });
            });

            // CRUD: route to Create data
            this.router.post('/page', ( req, res ) => {
                return res.json( {
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data created',
                    data: null,
                    err: null
                });
            })

            // CRUD: route to Read all data
            this.router.get('/page', ( req, res ) => {
                return res.json( {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'Data send',
                    data: null,
                    err: null
                });
            })

            // CRUD: route to Read one data
            this.router.get('/page/:id', ( req, res ) => {
                return res.json( {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'Data send',
                    data: null,
                    err: null
                });
            })

            // CRUD: route to Update one data
            this.router.put('/page/:id', ( req, res ) => {
                return res.json( {
                    url: req.originalUrl,
                    method: 'PUT',
                    msg: 'Data updated',
                    data: null,
                    err: null
                });
            })

            // CRUD: route to Delete one data
            this.router.delete('/page/:id', ( req, res ) => {
                return res.json( {
                    url: req.originalUrl,
                    method: 'DELETE',
                    msg: 'Data deleted',
                    data: null,
                    err: null
                });
            })
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return this.router;
        };
    }
//

/*
Export
*/
    module.exports = RouterClass;
//