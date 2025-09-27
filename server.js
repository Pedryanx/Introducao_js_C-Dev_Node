//console.log("Hello Word");
//function imprimirTexto() {
//    console.log("oi")
//}
//imprimirTexto();

//importa um módulo/pacote nativo do NodeJS
const http = require("node:http");

//defino o endereço do meu servidor
const hostname = "127.0.0.1";

//Define a porta onde o servidor vai rodar
const port = 3000;

//cria um servidor
const server = http.createServer((req, res) => {
    //o corpo {} de uma função anonima é onde colocamos os códigos

    //Define que a resposta será OK(sucesso)
    res.statusCode = 200;
    
    //Define o tipo de conteudo que será enviado
    res.setHeader("Content-type", "text/plain");

    res.end("Hello World, Ola Mundo ! ;)")
});

//server.listen((port, hostname) => {
//    console.log("http://" + hostname + ":" + port);
//});

server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
});



