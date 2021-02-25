/*
Imports
*/
    // Node
    const express = require('express');

    // Inner
    const { getHomePage } = require('../controllers/backoffice.controller');
//

/*  
Routes definition
*/
    class RouterClass {
        constructor({ connection } ){
           this.router = express.Router();
           this.connection = connection;
        }

        routes(){
            // Backoffice route definition
            this.router.get('/', ( req, res ) => getHomePage(this.connection, req, res) );
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