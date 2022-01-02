export default function handler(request, response) {
    const { name } = request.query;
    response.setHeader('application/json');
    response.status(200).send(JSON.stringify({hello: "world"}));
}
  