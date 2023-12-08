import { app, InvocationContext,output } from "@azure/functions";

export async function queueCart(queueItem: string, context: InvocationContext): Promise<unknown> {
    context.log('Storage queue function processed work item:', queueItem);
    context.log('Queue name:', context.info);
    return (queueItem )
}



app.storageQueue('queueCart', {
    queueName: 'ordersqueue105858896',
    connection: 'AzureWebJobsStorage',
    return: output.cosmosDB({
        databaseName: 'webCartDB',
        collectionName: 'customer', 
        partitionKey: '/storeId',        
        createIfNotExists: true,       
        connectionStringSetting: 'CosmosDBconnectionString'
    }),
    handler: queueCart
});
