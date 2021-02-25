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
        constructor( ){
           this.router = express.Router();
        }

        routes(){
            // Backoffice route definition
            this.router.get('/', ( req, res ) => {
                // Render index.ejs file
                return res.render('index');
            });
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