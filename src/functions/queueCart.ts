import { app, InvocationContext,output } from "@azure/functions";

export async function queueCart(queueItem: unknown, context: InvocationContext): Promise<{mensaje: unknown}> {
    context.log('Storage queue function processed work item:', queueItem);
    return ({mensaje:queueItem})
}

app.storageQueue('queueCart', {
    queueName: 'ordersqueue105858896',
    connection: 'AzureWebJobsStorage',
    return: output.cosmosDB({
        databaseName: 'orders',
        collectionName: 'mycontainer',
        createIfNotExists: true,
        connectionStringSetting: 'CosmosDBconnectionString'
    }),
    handler: queueCart
});
