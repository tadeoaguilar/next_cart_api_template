import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function restCart(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    context.log("method", request.method)
    // api/restCart?name=tadeo
    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('restCart', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: restCart
});
