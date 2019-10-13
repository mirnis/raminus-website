const express = require("express");

const app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/font', express.static(__dirname + '/public/font'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/owl-carousel', express.static(__dirname + '/public/owl-carousel'));

/*const server = app.listen(9005, function () {
    const port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});*/

const PORT = process.env.PORT || 9005;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});