require('babel-register')({
    babelrc: true, // Tell babel-register to use the .babelrc file
});
const server  = require('./server');

const port = parseInt(process.env.PORT, 10) || 3000;

server.App.listen(port, (err) => {
    if (err) throw err;
    console.log(`🤘 on http://localhost:${port}`);
});