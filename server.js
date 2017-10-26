/**
 * Created by Achala Kavinda on 10/26/2017.
 */

var express = require('express');

app = express();

port = process.env.PORT || 3000;



//initial app listen port
app.listen(port, err=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port '+port);
});