/**
 * WHIZYNET - Banco de Dados de Payloads
 * Este arquivo contém as payloads pré-definidas que serão exibidas no gerador.
 */

const PAYLOADS_DATA = [
    {
        name: "Método GET",
        content: "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]"
    },
    {
       name: "Método CONNECT",
       content: "CONNECT [host_port] [protocol][crlf]Host: [crlf][crlf]"
       },
    {
        name: "Método POST",
        content: "POST / HTTP/1.1[crlf]Host: [host][crlf]Connection: Keep-Alive[crlf]Content-Length: 0[crlf]User-Agent: [ua][crlf][crlf]"
    }
];
