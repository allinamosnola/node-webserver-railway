const http = require('http');

http
  .createServer((req, res) => {
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-type': 'application/csv' });
    // res.writeHead(200, { 'Content-type': 'application/json' });

    // const persona = {
    //   id: 1,
    //   nombre: 'Alonso',
    // };

    // res.write(JSON.stringify(persona));

    // res.write('id, nombre\n');
    // res.write('1, Alonso\n');
    // res.write('1, Alonso\n');
    // res.write('1, Alonso\n');

    res.write('Hola Mundo');

    res.end();
  })
  .listen(8080);

console.log('Escuchando en el puerto 8080');
