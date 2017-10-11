import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
  
const store = new Store(new RecordSource());

const fetchQuery = (operation, variables) => {
    return fetch('/users', {
    method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json());
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
    const query = config.text
    const subscriptionClient = new SubscriptionClient('wss://subscriptions.__REGION__.graph.cool/v1/__PROJECT_ID__', {reconnect: true});
    subscriptionClient.subscribe({query, variables}, (error, result) => observer.onNext({data: result}));
};

const network = Network.create(fetchQuery, setupSubscription);
export const environment = new Environment({ network, store });
