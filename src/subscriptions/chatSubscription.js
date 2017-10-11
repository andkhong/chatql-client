import { graphql, requestSubscription } from 'react-relay';
import { environment } from '../Environment.js';

const NewChatSubscription = graphql`
  subscription NewChatSubscription {
    Message {
      node {
        id
        createdAt
        message
      }
    }
  }
`;

export default () => {  
  const subscriptionConfig = {
    subscription: NewChatSubscription,
    variables: {},
    updater: proxyStore => {
      console.log(proxyStore)
    },
    onError: error => console.log(`An error occured:`, error)
  }
  requestSubscription(environment, subscriptionConfig);
}