export default function handler(request, response) {
    const { name } = request.query;
    response.status(200).send(`Hello ${name}! There is ${Object.keys(request.query).length} params`);
}
  