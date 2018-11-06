var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));

function drop_root() {
    process.setgid('nobody');
    process.setuid('nobody');
}

app.listen(3000, function() {
    console.log('listening on 3000');
    console.log('User ID:',process.getuid()+', Group ID:',process.getgid());
    drop_root();
    console.log('User ID:',process.getuid()+', Group ID:',process.getgid());
});

