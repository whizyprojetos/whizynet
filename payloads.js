/**
 * WHIZYNET - Banco de Dados de Payloads
 * Este arquivo contém as payloads pré-definidas que serão exibidas no gerador.
 */

const PAYLOADS_DATA = [
    {
        name: "HTTP",
        content: "GET / HTTP/1.1[crlf]Host:[crlf]Upgrade: websocket[crlf][crlf]"
    },
    {
       name: "HTTP CONNECT",
       content: "CONNECT [host_port] [protocol][crlf]Host: [crlf][crlf]"
       },
     {
      name: "REVERSO",
      content:"GET wss:/// HTTP/1.1[crlf]Host: unitel.ao[crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf][crlf]"
       },
    {
        name: "SSL/TLS",
        content: "GET wss://host/ HTTP/1.1[crlf]Host:[crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf][crlf]"
    }
];
