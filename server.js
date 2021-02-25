/* 
Imports
*/
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
//


/* 
Server definition
*/
    class ServerClass{
        // Inject properties in the ServerClass
        constructor(){
            this.server = express();
            this.port = process.env.PORT;
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
    MyServer.launch();
//