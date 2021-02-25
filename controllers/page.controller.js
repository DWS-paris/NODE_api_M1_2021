/*  
Controller definition
*/
    const createOne = (connection, req, res) => {
        // Create data in the DB
        connection.query('INSERT INTO page SET ?', req.body, ( err, data ) => {
            // Check query
            if( err ){
                // Send error message
                return res.json( {
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data not created',
                    data: null,
                    err: err
                });
            }
            else{
                // Send success message
                return res.json( {
                    url: req.originalUrl,
                    method: 'POST',
                    msg: 'Data created',
                    data: data,
                    err: null
                });
            }
        })
    }
//

/* 
Export
*/
    module.exports = {
        createOne
    }
//