/*  
Controller definition
*/
    const getHomePage = (connection, req, res) => {
        connection.query(`SELECT id, title FROM page`, ( err, data ) => {
            // Check query
            if( err ){
                // Send error message
                return res.render('index', {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'Data not sended',
                    data: null,
                    err: err
                });
            }
            else{
                // Send success message
                return res.render('index', {
                    url: req.originalUrl,
                    method: 'GET',
                    msg: 'Data sended',
                    data: data,
                    err: null
                });
            }
        })
    }

    const deleteOne = (connection, req, res) => {
        connection.query(`DELETE FROM ${req.params.endpoint} WHERE id=${req.params.id}`, ( err, data ) => {
            // Check query
            if( err ){
                // Send error message
                return res.redirect('/');
            }
            else{
                return res.redirect('/');
            }
        })
    }
//

/* 
Export
*/
    module.exports = {
        getHomePage,
        deleteOne
    }
//