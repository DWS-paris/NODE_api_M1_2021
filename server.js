/* 
Imports
*/
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
    const path = require('path'); //=> https://www.npmjs.com/package/path

    const MYSQLClass = require('./services/MYSQLclass');
//


/* 
Server definition
*/
    class ServerClass{
        // Inject properties in the ServerClass
        constructor(){
            this.server = express();
            this.port = process.env.PORT;
            this.mysql = new MYSQLClass();
        }

        init(){
            // Static path configuration
            this.server.set( 'views', __dirname + '/www' );
            this.server.use( express.static(path.join(__dirname, 'www')) );

            // Set server view engine
            this.server.set( 'view engine', 'ejs' );

            // Start config
            this.config();
        }

        config(){
            // Start MYSQL connection
            this.mysql.connectDb()
            .then( connection => {
                console.log(connection)
                
                // API route definition
                this.server.get('/v1', ( req, res ) => {
                    // Return JSON data
                    return res.json( {
                        msg: 'API Home page',
                        data: null,
                        err: null
                    });
                });

                // Backoffice route definition
                this.server.get('/', ( req, res ) => {
                    // Render index.ejs file
                    return res.render('index');
                });

                // Launch server
                this.launch();
            })
            .catch( sqlError => {
                console.log(`SQL error: ${sqlError}`)
            })

            
        }

        launch(){
            // Start server
            this.server.listen( this.port, () => {
                console.log({
                    node: `http://localhost:${this.port}`
                })
            })
        }
    }
//


/* 
Start server
*/
    const MyServer = new ServerClass();
    MyServer.init();
//