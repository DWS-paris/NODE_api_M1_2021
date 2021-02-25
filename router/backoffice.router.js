/*
Imports
*/
    // Node
    const express = require('express');

    // Inner
    const { getHomePage, deleteOne } = require('../controllers/backoffice.controller');
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
            // Get main page
            this.router.get('/', ( req, res ) => getHomePage(this.connection, req, res) );

            // Delete one data
            this.router.post('/:endpoint/:id/delete', ( req, res ) => deleteOne(this.connection, req, res) );
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