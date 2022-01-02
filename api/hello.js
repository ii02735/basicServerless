export default function handler(request, response) {
    const { name } = request.query;
    response.writeHead(200,{'Content-Type':'application/json'});
    response.send(JSON.stringify({hello: "world"}));
}
  